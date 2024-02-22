import React, { useCallback, useEffect, useState } from "react";
import "../Login/Login.css";
import { GrDocumentImage } from "react-icons/gr";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../features/actions";
import { useDispatch, useSelector } from "react-redux";
import { resetError } from "../../features/user";
import { toast } from "react-toastify";

function SignUp() {
  const [Username, setUsername] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [UsernameError, setUsernameError] = useState("");
  const [EmailError, setEmailError] = useState("");
  const [PasswordError, setPasswordError] = useState("");
  const [ConfirmPasswordError, setConfirmPasswordError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const valid_error = useSelector((state) => state.user.error);
  const navigator = useNavigate();
  const dispatch = useDispatch();
  const { is_Authenticated } = useSelector((state) => state.login);

  useEffect(() => {
    if (is_Authenticated) {
      navigator("/userdashboard");
    }
  }, [is_Authenticated]);

  useEffect(() => {
    dispatch(resetError());
  }, [Username, Email, Password, phoneNumber, ConfirmPassword]);

  const validateUsername = useCallback(
    (value) => {
      const regex = /^[a-zA-Z0-9_]{3,20}$/;
      setUsernameError(regex.test(value) ? "" : "Invalid username");
    },
    [Username]
  );
  const handleUsername = (e) => {
    const value = e.target.value;
    setUsername(value);
    validateUsername(value);
  };

  const validateEmail = (value) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailError(regex.test(value) ? "" : "Invalid email");
  };
  const handleEmail = (e) => {
    const value = e.target.value;
    setEmail(value);
    validateEmail(value);
  };

  const validatePassword = useCallback((value) => {
    const regex = /^.{8,}$/;
    setPasswordError(
      regex.test(value) ? "" : "Password must be at least 8 characters"
    );
  });
  const handlePassword = (e) => {
    const value = e.target.value;
    setPassword(value);
    validatePassword(value);
  };

  const validateConfirmPassword = (value) => {
    setConfirmPasswordError(value === Password ? "" : "Passwords do not match");
  };
  const handleConfirmPassword = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);
    validateConfirmPassword(value);
  };

  const validatePhoneNumber = (value) => {
    const regex = /^\d{10}$/;
    setPhoneNumberError(regex.test(value) ? "" : "Enter a valid phone number");
  };
  const handlePhoneNumber = (e) => {
    const value = e.target.value;
    setPhoneNumber(value);
    validatePhoneNumber(value);
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    if (
      !EmailError &&
      !UsernameError &&
      !PasswordError &&
      !phoneNumberError &&
      !ConfirmPasswordError
    ) {
      const respo = dispatch(
        registerUser({
          username: Username,
          email: Email,
          password: Password,
          phone_number: phoneNumber,
        })
      );
      navigator("/");
    } else {
      toast.error("Give Proper Credentials");
    }
  };

  return (
    <>
      <div className="w-full h-[700px] flex">
        <div className="w-[60%] max-lg:hidden h-full rounded-r-xl grid items-center justify-center">
          <div className="flex flex-shrink-0 flex-col items-center ">
            <div className="flex items-center">
              <span>
                <GrDocumentImage className="h-20 w-auto text-green-800" />
              </span>
              <span className="font-black text-8xl text-green-800">magify</span>
            </div>
          </div>
        </div>
        <div className="lg:w-[40%] w-full  h-full bg-slate-200 rounded-l-lg flex flex-col justify-center items-center">
          <section className="section_form max-sm:w-full max-sm:items-center max-sm:flex max-sm:flex-col">
            <div className="flex flex-shrink-0 max-sm:mx-auto flex-col items-center lg:hidden">
              <div className="flex">
                <span>
                  <GrDocumentImage className="h-10 w-auto text-green-800" />
                </span>
                <span className="font-black text-3xl text-green-800 mb-8">
                  magify
                </span>
              </div>
            </div>
            <h1 className="text-3xl max-sm:text-xl max-sm:px-9 font-bold max-sm:mx-auto">
              SIGN UP
            </h1>
            <form
              id="consultation-form max-sm:text-xs signup"
              className="feed-form max-sm:w-[85%] max-sm:mx-auto"
              onSubmit={(e) => handleRegistration(e)}
            >
              <input
                className={
                  UsernameError || valid_error.username
                    ? "input-changed"
                    : "input1"
                }
                required=""
                placeholder="Username"
                type="text"
                value={Username}
                onChange={(e) => handleUsername(e)}
              />
              <div className="error h-[10px] text-red-600">
                {valid_error.username ? valid_error.username : UsernameError}
              </div>
              <input
                className={
                  phoneNumberError || valid_error.phone_number
                    ? "input-changed"
                    : "input1"
                }
                name="phone"
                type="number"
                required=""
                placeholder="Phone number"
                value={phoneNumber}
                onChange={(e) => handlePhoneNumber(e)}
              />

              <div className="error h-[10px]  text-red-600">
                {valid_error.phone_number
                  ? valid_error.phone_number
                  : phoneNumberError}
              </div>
              <input
                className={
                  EmailError || valid_error.email ? "input-changed" : "input1"
                }
                name="email"
                required=""
                placeholder="E-mail"
                type="email"
                value={Email}
                onChange={(e) => handleEmail(e)}
              />

              <div className="error h-[10px] text-red-600">
                {valid_error.email ? valid_error.email : EmailError}
              </div>
              <input
                className={
                  PasswordError || valid_error.password
                    ? "input-changed"
                    : "input1"
                }
                name="password"
                required=""
                placeholder="Password"
                type="password"
                value={Password}
                onChange={(e) => handlePassword(e)}
              />

              <div className="error h-[10px] text-red-600">
                {valid_error.password ? valid_error.password : PasswordError}
              </div>

              <input
                className={
                  ConfirmPasswordError || valid_error.password
                    ? "input-changed"
                    : "input1"
                }
                name="confim-password"
                required=""
                placeholder="Confirm Password"
                type="password"
                value={ConfirmPassword}
                onChange={(e) => handleConfirmPassword(e)}
              />
              <div className="error h-[10px] text-red-600">
                {ConfirmPasswordError != null ? ConfirmPasswordError : ""}
              </div>

              <button className="button_submit">CREATE</button>
            </form>
          </section>
          <span className="text-xs mt-4 text-gray-800">
            Already have an account?
            <Link className="  text-green-800" to="/">
              Login
            </Link>
          </span>
        </div>
      </div>
    </>
  );
}

export default SignUp;
