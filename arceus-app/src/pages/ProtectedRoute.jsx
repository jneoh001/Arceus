import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth-context";

const ProtectedRoute = ({ children }) => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      console.log("No user, redirecting to login");
      navigate("/login", {
        replace: true,
        state: {
          message: "You must be logged in to access this page.",
        },
      });
    }
  }, [currentUser, navigate]);

  return currentUser ? children : null;
};

export default ProtectedRoute;
