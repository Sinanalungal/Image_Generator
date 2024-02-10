import React from 'react'
import Login from './Components/Login/Login'
import SignUp from './Components/SignUp/SignUp'
import UserDashboard from './Components/UserDashboard/UserDashboard'
import UserProfile from './Components/UserProfile/UserProfile'
import AdminLogin from './Components/AdminLogin/AdminLogin'
import AdminPage from './Components/AdminPage/AdminPage'  
import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route exact path='/' Component={Login}/>
      <Route exact path='/signup' Component={SignUp}/>
      <Route exact path='/userdashboard' Component={UserDashboard}/>
      <Route exact path='/userprofile' Component={UserProfile}/>
      <Route exact path='/adminlogin' Component={AdminLogin}/>
      <Route exact path='/adminpage' Component={AdminPage}/>
    </Routes>
    </BrowserRouter>
    {/* <Login/> */}
    {/* <SignUp/> */}
    {/* <UserDashboard/> */}
    {/* <UserProfile/> */}
    {/* <AdminLogin/> */}
    {/* <AdminPage/> */}
    </>
  )
}

export default App