import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user";
import loginReducer from "./features/LoginSlice";
import ImageGeneratingReducer from "./features/ImageGeneratingSlice";
export const store = configureStore({
  reducer: {
    user: userReducer,
    login: loginReducer,
    image:ImageGeneratingReducer,
  },
});
