import { configureStore } from "@reduxjs/toolkit";
import itemReducer from "./slices/itemSlice.ts";

export const store = configureStore({
  reducer: {
    mainItems: itemReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself (Check hooks.ts)
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
