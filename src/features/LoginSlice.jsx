import { createSlice } from "@reduxjs/toolkit";
import { LoginUser } from "./LoginAction";
import Cookies from "js-cookie";

const initialState = {
  loader: false,
  is_Authenticated: false,
  error: {},
  is_superuser: false,
  success: true,
};

const userLoginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    resetLoginError: (state) => {
      state.error = {};
    },
    userLogined: (state) => {
      state.is_Authenticated = true;
    },
    userLogout: (state) => {
      Cookies.remove("accessToken");
      state.is_Authenticated = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(LoginUser.pending, (state) => {
        state.loader = true;
        state.is_Authenticated = false;
      })
      .addCase(LoginUser.fulfilled, (state, action) => {
        state.loader = false;
        state.success = true;
      })
      .addCase(LoginUser.rejected, (state, action) => {
        state.loader = false;
        state.is_Authenticated = false;
        state.error = action.payload;
        state.success = false;
      });
  },
});

export const { resetLoginError, userLogined, userLogout } = userLoginSlice.actions;
export default userLoginSlice.reducer;
