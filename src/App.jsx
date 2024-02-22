import React, { Suspense, lazy, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cookies from "js-cookie";
import { userLogined, userLogout } from "./features/LoginSlice";
import "./App.css";

const Login = lazy(() => import("./Components/Login/Login"));
const SignUp = lazy(() => import("./Components/SignUp/SignUp"));
const UserDashboard = lazy(() =>
  import("./Components/UserDashboard/UserDashboard")
);
const UserProfile = lazy(() => import("./Components/UserProfile/UserProfile"));
const AdminLogin = lazy(() => import("./Components/AdminLogin/AdminLogin"));
const AdminPage = lazy(() => import("./Components/AdminPage/AdminPage"));
const NotFoundPage = lazy(() => import("./404"));

function App() {
  const { is_Authenticated, user } = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const userInfoCookie = useMemo(() => !!Cookies.get("accessToken"));
  useEffect(() => {
    userInfoCookie ? dispatch(userLogined()) : dispatch(userLogout());
  }, [userInfoCookie]);

  return (
    <>
      <BrowserRouter>
        <Suspense
          fallback={
            <div className="w-full h-svh flex items-center justify-center">
              <div className="three-body">
                <div className="three-body__dot"></div>
                <div className="three-body__dot"></div>
                <div className="three-body__dot"></div>
              </div>
            </div>
          }
        >
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/adminlogin" element={<AdminLogin />} />

            {is_Authenticated && !user.isSuperuser && (
              <>
                <Route path="/userdashboard" element={<UserDashboard />} />
                <Route path="/userprofile" element={<UserProfile />} />
              </>
            )}
            {is_Authenticated && user.isSuperuser && (
              <>
                <Route path="/adminpage" element={<AdminPage />} />
              </>
            )}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
