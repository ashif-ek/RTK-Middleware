import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import messageReducer from "./messageSlice";

const logger = (store) => (next) => (action) => {
  console.log("Dispatching:", action);
  const result = next(action);
  console.log("Next state:", store.getState());
  return result;
};

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    message: messageReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger),
  devTools: true,
});
