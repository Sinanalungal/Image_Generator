import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { registerUser } from "./actions";

const initialState = {
  // isAuthenticated: false,
  // user:null,
  loading: false,
  registered: false,
  error: {},
  success: false,
  // is_superuser:false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    resetError: (state) => {
      state.error = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.registered = true;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.registered = false;
        state.error = action.payload;
        console.log(action.payload, "dfdf ");
        console.log(state.error, "this one");
      });
  },
});

export const { resetError } = userSlice.actions;
export default userSlice.reducer;
