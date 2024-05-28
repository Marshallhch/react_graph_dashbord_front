import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  GET_VISITORS_API_URL,
  GET_CUSTOMERS_API_URL,
  GET_REVENUE_API_URL,
} from '../../constants/apiUrl';
import { getRequest } from '../../constants/requestMethods';

// 공통된 비동기 액션 생성 로직을 별도의 함수로 분리
const createFetchThunk = (actionType, apiURL) => {
  return createAsyncThunk(actionType, async () => {
    return await getRequest(apiURL);
  });
};

// Actions : get visitors
export const fetchVisitors = createFetchThunk(
  'fetchVisitors',
  GET_VISITORS_API_URL
);

// get customers : GET_CUSTOMERS_API_URL
export const fetchCustomers = createFetchThunk(
  'fetchCustomers',
  GET_CUSTOMERS_API_URL
);

// get revenue : GET_REVENUE_API_URL
export const fetchRevenue = createFetchThunk(
  'fetchRevenue',
  GET_REVENUE_API_URL
);

const handleFulfilled = (stateKey) => (state, action) => {
  state[stateKey] = action.payload;
};

const handleRejected = (state, action) => {
  console.log('Error', action.payload);
  state.isError = true;
};

const apisSlice = createSlice({
  name: 'apis',
  initialState: {
    visitorsData: null,
    customersData: null,
    revenueData: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchVisitors.fulfilled, handleFulfilled('visitorsData'))
      .addCase(fetchVisitors.rejected, handleRejected)
      .addCase(fetchCustomers.fulfilled, handleFulfilled('customersData'))
      .addCase(fetchCustomers.rejected, handleRejected)
      .addCase(fetchRevenue.fulfilled, handleFulfilled('revenueData'))
      .addCase(fetchRevenue.rejected, handleRejected);
  },
});

export default apisSlice.reducer;
