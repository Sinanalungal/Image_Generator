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
      const response = await axios.post(`${base_url}api/token/userdata/`, data, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      console.log(response)

      Cookies.set("detail", JSON.stringify(response.data), { expires: 2 });
      Cookies.set(
        "accessToken",
        JSON.stringify(jwtDecode(response.data.access)),
        { expires: 1 }
      );
      
      toast.success("User logged in successfully");
      console.log(response.data);

      // if (response.status == 200){
      //   console.log('working')
      //   try{
      //     const userdata=await axios.post(`${base_url}api/users/fetchdata/`,data,{
      //       headers: {
      //         Accept: "application/json",
      //         "Content-Type": "application/json",
      //       },
      //     });
      //     Cookies.set("user", JSON.stringify(userdata.data));
  
      //   }catch(error){
      //     console.log('userdata unavailable')
      //   }
        
      // }
      // console.log(response)
      return response.data
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

// export const UserDetail = createAsyncThunk(
//   "login",
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await axios.post(`${base_url}api/users/me`, {
//         headers: {
//           Accept: "application/json",
//           "Content-Type": "application/json",
//         },
//       });
//       console.log(response)

//       Cookies.set("userdata", JSON.stringify(response.data));

//       console.log(response)
      
//       return response.data
//     } catch (error) {
//       if (error.response) {
//         toast.error("Give valid Credentials");
//         return rejectWithValue(error.response.data);
//       } else {
//         toast.error("Give valid Credentials");
//         return rejectWithValue(error.response.data);
//       }
//     }
//   }
// );


const refreshAccessToken = async () => {
  try {
      const refreshToken = JSON.parse(Cookies.get('detail')).refresh;
      console.log('Refresh Token:', refreshToken);

      const response = await axios.post(`${base_url}api/token/refresh/`, { refresh: refreshToken });
      const newAccessToken = response.data.access;
      // Update the access token in cookies
      Cookies.set('detail', JSON.stringify({ access: newAccessToken, refresh: refreshToken }), { expires: 2 });
      Cookies.set('accessToken', newAccessToken, { expires: 2 });
      return newAccessToken;
  } catch (error) {
    console.error("Token refresh failed:", error);
    throw error;


  }
};

axios.interceptors.request.use(async (config) => {
  console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
  try{
    const accessToken = JSON.parse(Cookies.get('accessToken'));
  // Decode the access token to get expiry time
    const { exp } = jwtDecode(accessToken);
    const currentTime = Date.now() / 1000;
    // If token is expired or will expire in next 60 seconds, refresh it
    if (exp && exp - currentTime < 60) {
      const newAccessToken = await refreshAccessToken();
      config.headers.Authorization = `Bearer ${newAccessToken}`;
    } else {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  }catch{
    console.log('working....')
    return config;
  }
  
});