import React, { useCallback, useEffect, useState } from "react";
import "./Modal.css";
import axios from "axios";
import { base_url } from "../../features/base_url";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function EditModal({ setModalIsOpen ,setUser, action , user }) {

  const [hide,setHide]=useState('')
  const [username,setUsername]=useState('')
  const [phone_number,setPhoneNumber]=useState('')
  const [password,setPassword]=useState('')
  const [confirmPassword,setConfirmPassword]=useState('')
  const [usernameError,setUsernameError]=useState('')
  // const [emailError,setEmailError]=useState('')
  const [passwordError,setPasswordError]=useState('')
  const [confirmPasswordError,setConfirmPasswordError]=useState('')
  const [phoneNumberError,setPhoneNumberError]=useState('')
const navigator=useNavigate()
  // const [essential,setEssential]=useEffect('hidden')
  console.log(user,'this one')
const valid_error={}
  useEffect(()=>{
    if (action =="Edit Details"){
      setHide('hidden')
    }
    setUsername(user.username)
    setPhoneNumber(user.phone_number)

  },[])
  const HandleSubmit = (e) => {
    e.preventDefault();
    const data={...user,username:username,phone_number:phone_number}
    if (password && password==confirmPassword){
      data.password=password
    }
    if(!usernameError&&!phoneNumberError&&!confirmPasswordError&&!passwordError){
      try{
        axios.post(`${base_url}api/users/edit_details/`,data).then((response)=>{
          Cookies.set('user', JSON.stringify(data));
          setUser(data)
        });toast.success('data updated successfully')
        
        setModalIsOpen(false)
      }catch(e){
        toast.error('Something went wrong')
      }
      
    }

  }
  const validateUsername = useCallback(
    (value) => {
      const regex = /^[a-zA-Z0-9_]{3,20}$/;
      setUsernameError(regex.test(value) ? "" : "Invalid username");
    },
    [username]
  );
  const validatePhoneNumber = (value) => {
    const regex = /^\d{10}$/;
    setPhoneNumberError(regex.test(value) ? "" : "Enter a valid phone number");
  };
  const validatePassword = useCallback((value) => {
    const regex = /^.{8,}$/;
    setPasswordError(
      regex.test(value) ? "" : "Password must be at least 8 characters"
    );
  });
  const validateConfirmPassword = (value) => {
    setConfirmPasswordError(value === password ? "" : "Passwords do not match");
  };
  return (
    <>
      <div className="w-full h-full flex justify-center items-center">
        <div className="  w-full h-full section_f p-2 flex flex-col justify-center align-middle">
          <h1 className="text-xl font-bold ">{action}</h1>
          <form onSubmit={HandleSubmit}
            id="consultation-form"
            className="formy flex flex-col mt-5"
            action="#"
          >
            <input
              value={username}
              onChange={(e)=>{setUsername(e.target.value)
                validateUsername(e.target.value)}
              }
              className="formy-input"
              required=""
              placeholder="Name"
              type="text"
            />
            <div className="error text-xs ml-1 mb-1 text-red-600">
                {valid_error.username ? valid_error.username : usernameError}
              </div>
            <input
              value={phone_number}
              onChange={(e)=>{setPhoneNumber(e.target.value)
                validatePhoneNumber(e.target.value)}}
              className="formy-input"
              name="phone"
              required=""
              placeholder="Phone number"
            />
            <div className="error text-xs ml-1 mb-1 text-red-600">
                {valid_error.phone_number ? valid_error.phone_number : phoneNumberError}
              </div>
            {/* <input
              className="formy-input"
              name="email"
              required=""
              placeholder="E-mail"
              type="email"
            /> */}
            {(hide=='hidden')?(<div className="bg-gray-200  rounded-md mb-2 font-bold cursor-pointer text-xs w-[100px] text-black p-2" onClick={()=>setHide('')}>Edit password</div>):''}
            <input
              value={password}
              onChange={(e)=>{setPassword(e.target.value)
                validatePassword(e.target.value)}}
              className={`formy-input ${hide}`}
              name="password"
              required=""
              placeholder="Password"

              type="password"
            />
            <div className="error text-xs ml-1 mb-1 text-red-600">
                {valid_error.password ? valid_error.password : passwordError}
              </div>
            <input
              value={confirmPassword}
              onChange={(e)=>{setConfirmPassword(e.target.value)
                validateConfirmPassword(e.target.value)}}
              className={`formy-input ${hide}`}
              name="confim-password"
              required=""
              placeholder="Confirm Password"
              type="password"
            />
            <div className="error text-xs ml-1 mb-1 text-red-600">
                {valid_error.confirm_password ? valid_error.confirm_password : confirmPasswordError}
              </div>
            <button className="button_subm">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default EditModal;
