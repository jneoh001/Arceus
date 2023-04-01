import { Form, Button } from "react-bootstrap";
import "./LoginCard.css";
import { useAuth } from "../../store/auth-context";
import { useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const LoginCard = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const { login, wrongPassword, userNotFound } = useAuth();
  const submitHandler = (e) => {
    login(emailRef.current.value, passwordRef.current.value)
      .then(() => {
        navigate("/profile");
      })
      .catch(() => {
        navigate("/login");
      });
    e.preventDefault();
  };

  const passwordResetHandler = (e) => {
    navigate("/password-reset");
    e.preventDefault();
  };
  return (
    <div className="login-container bg-gray-800">
      <Form onSubmit={submitHandler}>
        <Form.Group className="login-input" controlId="formBasicEmail">
          <Form.Control
            className="login-input"
            size="lg"
            type="email"
            placeholder="Email Address"
            ref={emailRef}
          />
        </Form.Group>
        {userNotFound && (
          <p className="text-red-500 mt-2">*Email is not registered</p>
        )}
        <Form.Group className="login-input" controlId="formBasicPassword">
          <Form.Control
            size="lg"
            type="password"
            placeholder="Password"
            ref={passwordRef}
          />
        </Form.Group>
        {wrongPassword && (
          <p className="text-red-500 mt-2">*Incorrect Password</p>
        )}
        <div className="d-grid">
          <button
            type="submit"
            className="mt-8 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Log In
          </button>
        </div>
      </Form>
      <div className="login-2nd-container">
        <NavLink to={"/register"}>
          <button>Don't have an account?</button>
        </NavLink>
        <NavLink to={"/"}>
          <button onClick={passwordResetHandler}>Forget Password?</button>
        </NavLink>
      </div>
    </div>
  );
};

export default LoginCard;
