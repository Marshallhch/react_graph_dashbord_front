import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  GET_VISITORS_API_URL,
  GET_CUSTOMERS_API_URL,
} from '../../constants/apiUrl';
import { getRequest } from '../../constants/requestMethods';

// Actions : get visitors
export const fetchVisitors = createAsyncThunk('fetchVisitors', async () => {
  return await getRequest(GET_VISITORS_API_URL);
});

// get customers : GET_CUSTOERMS_API_URL
export const fetchCustomers = createAsyncThunk('fetchCustomers', async () => {
  return await getRequest(GET_CUSTOMERS_API_URL);
});

const visitorsSlice = createSlice({
  name: 'apis',
  initialState: {
    visitorsData: null,
    customersData: null,
    isError: false,
  },
  extraReducers: (builder) => {
    // builder.addCase(fetchVisitors.pending, (state, action) => {
    //   state.isLoading = true;
    // });
    builder.addCase(fetchVisitors.fulfilled, (state, action) => {
      // state.isLoading = false;
      state.visitorsData = action.payload;
    });
    builder.addCase(fetchVisitors.rejected, (state, action) => {
      console.log('Error', action.payload);
      state.isError = true;
    });

    // builder.addCase(fetchVisitors.pending, (state, action) => {
    //   state.isLoading = true;
    // });
    builder.addCase(fetchCustomers.fulfilled, (state, action) => {
      // state.isLoading = false;
      state.customersData = action.payload;
    });
    builder.addCase(fetchCustomers.rejected, (state, action) => {
      console.log('Error', action.payload);
      state.isError = true;
    });
  },
});

export default visitorsSlice.reducer;
