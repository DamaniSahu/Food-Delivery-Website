import { configureStore } from '@reduxjs/toolkit'
import cardReducer from './CardSlice';

export const Store = configureStore({
  reducer: {
    Card: cardReducer,
  },
})