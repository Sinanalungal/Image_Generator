import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/");
  });
};

export default NotFoundPage;
