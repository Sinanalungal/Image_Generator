import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const { is_Authenticated, user } = useSelector((state) => state.login );
  const navigate = useNavigate();
  useEffect(() => {
    if (is_Authenticated&&user.isSuperuser) { navigate("/adminpage")}
    else if (is_Authenticated&&!user.isSuperuser) { navigate("/userdashboard")}
    else {navigate('/')}
  });
};

export default NotFoundPage;
