// import { createSlice } from "@reduxjs/toolkit";
// import { profileUpdate } from "./actions";

// const initialState={
//     loader:false,
//     updatedprofile:false
// }

// const profileUpdateSlice=createSlice({
//     name:'profile',
//     initialState,
//     reducers:{
//     },
//     extraReducers:(builder)=>{
//         builder
//         .addCase(profileUpdate.pending,(state,)=>{
//              state.loader=true
 
//         })
//         .addCase(profileUpdate.fulfilled,(state,action)=>{
//             state.updatedprofile=true;
//             const result = action.payload;
//             console.log(result)
//         })
//         .addCase(profileUpdate.rejected,(state,action)=>{
//             state.loader=false;
//             state.updatedprofile=false;
//         })
//     }
// })