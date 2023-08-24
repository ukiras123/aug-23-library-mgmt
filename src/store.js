import { configureStore } from "@reduxjs/toolkit";
import adminReducer from "./user/useSlice";
export const store = configureStore({
  reducer: {
    adminInfo: adminReducer,
  },
});
