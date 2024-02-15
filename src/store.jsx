import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user";
import loginReducer from "./features/LoginSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    login: loginReducer,
  },
});
