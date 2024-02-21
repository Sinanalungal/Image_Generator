import { createSlice } from "@reduxjs/toolkit";
import { LoginUser } from "./LoginAction";
import Cookies from "js-cookie";


import React, { useEffect } from 'react'




const initialState = {
  loader: false,
  is_Authenticated: false,
  error: {},
  user:{},
  is_superuser: false,
  success: false,
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
      Cookies.remove("detail");
      Cookies.remove("user");
      state.is_Authenticated = false;
      state.success = false;

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
        // try{
        //   const initialUserData = Cookies.get("user");
        //   state.user = initialUserData ? JSON.parse(initialUserData) : {};
        // }catch(e){
        //   console.log(e)
        // }
        
      })
      .addCase(LoginUser.rejected, (state, action) => {
        state.loader = false;
        state.is_Authenticated = false;
        state.error = action.payload;
        state.success = false;
      })
      // .addCase(UserDetail.pending,(state)=>{
      //   state.loader=true

      // }).addCase(UserDetail.fulfilled, (state, action) => {
      //   state.loader=false;
      //   state.user=action.payload
      // })
      // .addCase(UserDetail.rejected, (state, action)=>{
      //    state.loader=false;
      //    state.user={};
      //    state.error=action.payload.data.err;
      // })

  },
});



export const { resetLoginError, userLogined, userLogout } = userLoginSlice.actions;
export default userLoginSlice.reducer;
