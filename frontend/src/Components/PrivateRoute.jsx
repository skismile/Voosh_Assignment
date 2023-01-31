import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const store = useSelector((store) => store.all.isAuth);

  if (store) {
    return children;
  }
  return <Navigate to="/" />;
};

export default PrivateRoute;
