import { combineReducers, configureStore } from '@reduxjs/toolkit';
import sidebarReducer from './slices/sidebarSlice';
import apisReducer from './slices/apiSlice';

const store = configureStore({
  reducer: combineReducers({
    sidebar: sidebarReducer,
    apis: apisReducer,
  }),
});

export default store;
