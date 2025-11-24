import {
  useDispatch,
  useSelector,
  type TypedUseSelectorHook,
} from "react-redux";
import type { RootState, AppDispatch } from "./store";

// Use throughout the app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// useSelector: reads a slice of state from the Redux store. It subscribes the component to store updates so the component re-renders when the selected state changes.

// useDispatch: returns the store.dispatch function. Call dispatch(action) to send an action to the store so reducers (and middleware) can process it.
