import { configureStore } from '@reduxjs/toolkit'
import collectionSlice from './collectionSlice'

export const store = configureStore({
  reducer: {
    arcusInfo:collectionSlice,
  },
})