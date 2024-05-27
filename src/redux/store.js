import { combineReducers, configureStore } from '@reduxjs/toolkit';
import sidebarReducer from './slices/sidebarSlice';
import visitorsReducer from './slices/apiSlice';

const store = configureStore({
  reducer: combineReducers({
    sidebar: sidebarReducer,
    apis: visitorsReducer,
  }),
});

export default store;
