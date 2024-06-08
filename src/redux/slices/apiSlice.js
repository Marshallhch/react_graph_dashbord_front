import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  GET_VISITORS_API_URL,
  GET_CUSTOMERS_API_URL,
  GET_REVENUE_API_URL,
  GET_TARGET_REALITY_API_URL,
  GET_TOP_PRODUCTS_API_URL,
  GET_SALES_MAP_API_URL,
  GET_VOLUME_SERVICES_API_URL,
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

// get target_reality : GET_TARGET_REALITY_API_URL
export const fetchTargetReality = createFetchThunk(
  'fetchTargetReality',
  GET_TARGET_REALITY_API_URL
);

// get top_products : GET_TOP_PRODUCTS_API_URL
export const fetchTopProducts = createFetchThunk(
  'fetchTopProducts',
  GET_TOP_PRODUCTS_API_URL
);

// get top_products : GET_SALES_MAP_API_URL
export const fetchSalesMap = createFetchThunk(
  'fetchSalesMap',
  GET_SALES_MAP_API_URL
);

// get top_products : GET_VOLUME_SERVICES_API_URL
export const fetchVolumeServices = createFetchThunk(
  'fetchVolumeServices',
  GET_VOLUME_SERVICES_API_URL
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
    targetRealityData: null,
    topProductsData: null,
    salesMapData: null,
    volumeServicesData: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchVisitors.fulfilled, handleFulfilled('visitorsData'))
      .addCase(fetchVisitors.rejected, handleRejected)
      .addCase(fetchCustomers.fulfilled, handleFulfilled('customersData'))
      .addCase(fetchCustomers.rejected, handleRejected)
      .addCase(fetchRevenue.fulfilled, handleFulfilled('revenueData'))
      .addCase(fetchRevenue.rejected, handleRejected)
      .addCase(
        fetchTargetReality.fulfilled,
        handleFulfilled('targetRealityData')
      )
      .addCase(fetchTargetReality.rejected, handleRejected)
      .addCase(fetchTopProducts.fulfilled, handleFulfilled('topProductsData'))
      .addCase(fetchTopProducts.rejected, handleRejected)
      .addCase(fetchSalesMap.fulfilled, handleFulfilled('salesMapData'))
      .addCase(fetchSalesMap.rejected, handleRejected)
      .addCase(
        fetchVolumeServices.fulfilled,
        handleFulfilled('volumeServicesData')
      )
      .addCase(fetchVolumeServices.rejected, handleRejected);
  },
});

export default apisSlice.reducer;
