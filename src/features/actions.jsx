import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { base_url } from "./base_url";
import { toast } from "react-toastify";

export const registerUser = createAsyncThunk(
  "user/register",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${base_url}api/users/register/`,
        data,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      toast.success("created successfully");
    } catch (error) {
      if (error.response) {
        toast.error("Give proper credentials");
        return rejectWithValue(error.response.data);
      } else {
        // console.log(error)
        toast.error("Give proper credentials");
        return rejectWithValue(error.response.data);
      }
    }
  }
);
