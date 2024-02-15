import { createAsyncThunk } from "@reduxjs/toolkit";
import { base_url } from "./base_url";
import axios from "axios";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";

export const LoginUser = createAsyncThunk(
  "login",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${base_url}api/token/`, data, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      Cookies.set("detail", JSON.stringify(response.data), { expires: 2 });
      Cookies.set(
        "accessToken",
        JSON.stringify(jwtDecode(response.data.access)),
        { expires: 2 }
      );
      toast.success("User logged in successfully");
      // console.log(response)
      // return response.data
    } catch (error) {
      if (error.response) {
        toast.error("Give valid Credentials");
        return rejectWithValue(error.response.data);
      } else {
        toast.error("Give valid Credentials");
        return rejectWithValue(error.response.data);
      }
    }
  }
);
