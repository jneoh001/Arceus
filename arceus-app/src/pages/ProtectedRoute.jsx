import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../store/auth-context";
const ProtectedRoute = ({ children }) => {
  const { currentUser } = useAuth();
  if (!currentUser) {
    console.log("No user, redirecting to login");
    return (
      <Navigate
        to={{
          pathname: "/login",
          state: {
            message: "You need to be logged in to access this page.",
          },
        }}
      />
    );
  }
  return children;
};

export default ProtectedRoute;
