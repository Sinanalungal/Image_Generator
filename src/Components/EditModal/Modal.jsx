import React, { useCallback, useEffect, useState } from "react";
import "./Modal.css";
import axios from "axios";
import { base_url } from "../../features/base_url";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { dataFetch } from "../../features/LoginSlice";
import { registerUser } from "../../features/actions";

function EditModal({
  setModalIsOpen,
  setModalIsOpenToFalse,
  action,
  showemail,
  userdata,
  setUsersData,
}) {
  const [hide, setHide] = useState("");
  const [username, setUsername] = useState("");
  const [Email, setEmail] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [EmailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const { user } = useSelector((store) => store.login);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(user, "this one");
  const valid_error = {};
  console.log(userdata);

  useEffect(() => {
    if (action == "Edit Details" || action == "Edit User Details") {
      setHide("hidden");
    }
    if (userdata != false) {
      setUsername(userdata.username);
      setEmail(userdata.email);
      setPhoneNumber(userdata.phone_number);
    } else if (userdata == false && action == "Edit Details") {
      setUsername(user.username);
      setPhoneNumber(user.phone_number);
    }
  }, []);
  const HandleSubmit = (e) => {
    e.preventDefault();

    if (
      !usernameError &&
      !phoneNumberError &&
      !confirmPasswordError &&
      !passwordError &&
      userdata == false &&
      action == "Edit Details"
    ) {
      const data = { ...user, username: username, phone_number: phone_number };
      if (password && password == confirmPassword) {
        data.password = password;
      }
      try {
        axios
          .post(`${base_url}api/users/edit_details/`, data)
          .then((response) => {
            Cookies.set("accessToken", JSON.stringify(data));
            toast.success("data updated successfully");
            dispatch(dataFetch());
            setModalIsOpen(false);
          });
      } catch (e) {
        toast.error("Something went wrong");
      }
    } else if (
      !usernameError &&
      !phoneNumberError &&
      !confirmPasswordError &&
      !passwordError &&
      !EmailError &&
      userdata != false
    ) {
      const data = {
        username: username,
        email: Email,
        password: password,
        phone_number: phone_number,
      };

      axios
        .put(`${base_url}api/users/edit_user/${userdata.id}/`, data)
        .then((response) => {
          console.log(response.data, "success");
          setUsersData(response.data);
          toast.success("Edited Successfully!!");
          setModalIsOpenToFalse();
        })
        .catch((error) => {
          console.error(error, "error");
          toast.error(error.response.data.message);
        });
    } else if (action == "Add User") {
      if (
        !EmailError &&
        !usernameError &&
        !passwordError &&
        !phoneNumberError &&
        !confirmPasswordError &&
        Email.trim() &&
        username.trim() &&
        password.trim() &&
        confirmPassword.trim() &&
        phone_number.trim()
      ) {
        const respo = dispatch(
          registerUser({
            username: username,
            email: Email,
            password: password,
            phone_number: phone_number,
          })
        ).then((response) => {
          setModalIsOpenToFalse();
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        });
      } else {
        toast.error("Give Proper Credentials");
      }
    }
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
          <form
            onSubmit={HandleSubmit}
            id="consultation-form"
            className="formy flex flex-col mt-5"
            action="#"
          >
            <input
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                validateUsername(e.target.value);
              }}
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
              onChange={(e) => {
                setPhoneNumber(e.target.value);
                validatePhoneNumber(e.target.value);
              }}
              className="formy-input"
              name="phone"
              required=""
              placeholder="Phone number"
            />
            <div className="error text-xs ml-1 mb-1 text-red-600">
              {valid_error.phone_number
                ? valid_error.phone_number
                : phoneNumberError}
            </div>
            {showemail && (
              <>
                <input
                  className="formy-input"
                  value={Email}
                  onChange={(e) => handleEmail(e)}
                  name="email"
                  required=""
                  placeholder="E-mail"
                  type="email"
                />
                <div className="error text-xs ml-1 mb-1 text-red-600">
                  {valid_error.email ? valid_error.email : EmailError}
                </div>
              </>
            )}
            {hide == "hidden" ? (
              <div
                className="bg-gray-200  rounded-md mb-2 font-bold cursor-pointer text-xs w-[100px] text-black p-2"
                onClick={() => setHide("")}
              >
                Edit password
              </div>
            ) : (
              ""
            )}
            <input
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                validatePassword(e.target.value);
              }}
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
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                validateConfirmPassword(e.target.value);
              }}
              className={`formy-input ${hide}`}
              name="confim-password"
              required=""
              placeholder="Confirm Password"
              type="password"
            />
            <div className="error text-xs ml-1 mb-1 text-red-600">
              {valid_error.confirm_password
                ? valid_error.confirm_password
                : confirmPasswordError}
            </div>
            <button className="button_subm">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default EditModal;
