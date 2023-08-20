import { configureStore } from "@reduxjs/toolkit";
import collectionReducer from "./collectionSlice";

export const store = configureStore({
  reducer: {
    arcusInfo: collectionReducer,
  },
});