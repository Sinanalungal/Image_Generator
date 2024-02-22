import { createSlice } from "@reduxjs/toolkit";
import { createImage } from "./actions";

const initialState = {
  loader: false,
  error: {},
  ImageUrl: null,
  success: false,
};
const imageGeneratorSlice = createSlice({
  name: "image",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createImage.pending, (state) => {
        state.loader = true;
      })

      .addCase(createImage.fulfilled, (state, action) => {
        state.loader = false;
        state.ImageUrl = action.payload.image;
        state.success = true;
      })
      .addCase(createImage.rejected, (state, action) => {
        state.loader = false;
        state.ImageUrl = null;
        state.success = false;
        state.error = action.payload.data.err;
      });
  },
});

export default imageGeneratorSlice.reducer;
