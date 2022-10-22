import { configureStore } from '@reduxjs/toolkit';
import tokenReducer from '../modules/AuthSlice';

const store = configureStore({
  reducer: { token: tokenReducer },
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
