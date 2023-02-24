import { Form, Button } from "react-bootstrap";
import "./LoginCard.css";

const LoginCard = () => {
  const submitHandler = (e) => {
    const username = e.target[0].value;
    const password = e.target[1].value;
    e.preventDefault();
  };
  return (
    <div className="login-container">
      <Form onSubmit={submitHandler}>
        <Form.Group className="login-input" controlId="formBasicEmail">
          <Form.Control
            className="login-input"
            size="lg"
            type="email"
            placeholder="Email Address"
          />
        </Form.Group>

        <Form.Group className="login-input" controlId="formBasicPassword">
          <Form.Control size="lg" type="password" placeholder="Password" />
        </Form.Group>
        <div className="d-grid">
          <Button size="lg" variant="dark" type="submit">
            Log In
          </Button>
        </div>
      </Form>
      <div className="login-2nd-container">
        <a href="#register">Don't have an account?</a>
        <a href="#forgetpassword">Forget Password?</a>
      </div>
    </div>
  );
};

export default LoginCard;
