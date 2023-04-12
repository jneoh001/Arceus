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
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await login(emailRef.current.value, passwordRef.current.value);
      if (!wrongPassword) {
        navigate("/");
      }
    } catch (error) {
      navigate("/login");
    };
  };

  const passwordResetHandler = (e) => {
    navigate("/password-reset");
    e.preventDefault();
  };
  return (
    <div className="login-container bg-gray-800">
      <Form onSubmit={submitHandler} noValidate>
        <Form.Group className="login-input" controlId="formBasicEmail">
          <Form.Control
            className="login-input"
            size="lg"
            type="email"
            placeholder="Email Address"
            ref={emailRef}
            required
            onInvalid={() =>
              emailRef.current.setCustomValidity(
                "*Required"
              )
            }
            onChange={() => emailRef.current.setCustomValidity("")}
            isInvalid={emailRef.current && !emailRef.current.validity.valid}
          />
          <Form.Control.Feedback type="invalid" className="fs-5 mt-2">
            *Required
          </Form.Control.Feedback>
          {userNotFound && (
            <p className="text-red-500 mt-2 fs-5">*Email is not Registered</p>
          )}
        </Form.Group>
        <Form.Group className="login-input" controlId="formBasicPassword">
          <Form.Control
            size="lg"
            type="password"
            placeholder="Password"
            ref={passwordRef}
            required
            onInvalid={() =>
              passwordRef.current.setCustomValidity(
                "*Required"
              )
            }
            onChange={() => passwordRef.current.setCustomValidity("")}
            isInvalid={
              passwordRef.current && !passwordRef.current.validity.valid
            }
          />
          <Form.Control.Feedback type="invalid" className="fs-5 mt-2">
            *Required
          </Form.Control.Feedback>
          {wrongPassword && (
            <p className="text-red-500 mt-2 fs-5">*Incorrect Password</p>
          )}
        </Form.Group>

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
          <button onClick={passwordResetHandler}>Forgot Password?</button>
        </NavLink>
      </div>
    </div>
  );
};

export default LoginCard;
