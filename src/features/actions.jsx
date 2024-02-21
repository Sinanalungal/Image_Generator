import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { base_url } from "./base_url";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

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
        toast.error("Give proper credentials");
        return rejectWithValue(error.response.data);
      }
    }
  }
);



export const createImage=createAsyncThunk(
  'image/',
  async(data,{rejectWithValue})=>{
    try{
      const response=await axios.post(`${base_url}api/users/generate_image/`,data,{
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })

      return response.data

    }catch(error){
      return rejectWithValue(error.response.data);
    }
  }
)

// export const profileUpdate=createAsyncThunk(
//   'profile/', async(data,{rejectWithValue})=>{
//     const id=JSON.parse(Cookies.get(accessToken).user_id)
//     console.log(id)
//     try{
//       const access=JSON.parse(Cookies.get('accessToken'))
//       const response=await axios.put(`${base_url}api/users/update_profile/${id}/`,data);
//       console.log(response)
//       return response.data
//     }catch(error){
//       return rejectWithValue(error.response.data)
//     }
    
//   }

// )

// // export const 
