import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import store from '../../store'
import { resetLoginError, userLogined, userLogout } from "../../features/LoginSlice";
import { LoginUser } from "../../features/LoginAction";
import Cookies from "js-cookie";

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [EmailError, setEmailError] = useState("");
  const [PasswordError, setPasswordError] = useState("");
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const { error , user } = useSelector((state) => state.login );
  const { is_Authenticated } = useSelector((state) => state.login);

  // console.log(error)

  const userInfoCookie = !!Cookies.get("accessToken")&&!!Cookies.get("detail");
  useEffect(() => {
    userInfoCookie ? dispatch(userLogined()) : dispatch(userLogout());
  }, [userInfoCookie]);

  useEffect(() => {


    if (is_Authenticated && user.isSuperuser) {
      console.log(is_Authenticated,user.isSuperuser)
      navigator('/adminpage');
    }else if (is_Authenticated){
      navigator('/userdashboard');
    }
  }, [is_Authenticated]);

  useEffect(() => {
    dispatch(resetLoginError());
  }, [email, password]);

  const validateEmail = (value) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailError(regex.test(value) ? "" : "Invalid email");
  };
  function handleEmailChange(e) {
    const value = e.target.value;
    setEmail(value);
    validateEmail(value);
  }

  const validatePassword = (value) => {
    const regex = /^.{8,}$/;
    setPasswordError(
      regex.test(value) ? "" : "Password must be at least 8 characters"
    );
  };
  function handlePasswordChange(e) {
    const value = e.target.value;
    setPassword(value);
    validatePassword(value);
  }

  function submitForm(e) {
    e.preventDefault();
    if (!EmailError && !PasswordError) {
      const data = {
        email: email,
        password: password,
      };
      const respo = dispatch(LoginUser(data));
      console.log(respo);
    } else {
      toast.error(EmailError ? EmailError : PasswordError);
    }
  }
  return (
    <>
      <section className="bg-gray-100 min-h-svh  ">
        <div className="flex flex-col align-middle items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0  dark:border-gray-200">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-dark">
                Admin Login
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={(e)=>submitForm(e)}>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-xs font-medium text-gray-900 dark:text-dark"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) =>handleEmailChange(e)}
                    name="email"
                    id="email"
                    className={
                      EmailError ||(error && error.email) ?"bg-gray-50 border border-red-600 text-gray-900 sm:text-xs rounded-lg focus:ring-primary-600 focus:border-red-800 block w-full p-2.5 dark:border-red-700 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500":"bg-gray-50 border border-gray-300 text-gray-900 sm:text-xs rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    }
                  
                    placeholder="Admin Email"
                    required
                  />
                  <div className="error h-[10px] text-xs text-red-600">
                    {(error && error.email) ? error.email : EmailError}
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-xs font-medium text-gray-900 dark:text-dark"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) =>handlePasswordChange(e)}
                    typeof="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className={
                      PasswordError || (error && error.password) ?"bg-gray-50 border border-red-600 text-gray-900 sm:text-xs rounded-lg focus:ring-primary-600 focus:border-red-800 block w-full p-2.5 dark:border-red-700 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500":"bg-gray-50 border border-gray-300 text-gray-900 sm:text-xs rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    }                    required
                  />
                  <div className="error text-xs h-[10px] text-red-600">
                    {(error && error.password) ? error.password : PasswordError}
                  </div>
                </div>
                <button
                  type="submit"
                  className=" border border-gray-300 font-bold sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  style={{ backgroundColor: "black" }}
                  // onClick={() => navigator("/adminpage")}
                  required
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AdminLogin;
