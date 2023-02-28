import { Form, Button } from "react-bootstrap";
import "./LoginCard.css";

const LoginCard = () => {
  const submitHandler = (e) => {
    const data = {
      email: e.target[0].value,
      password: e.target[1].value,
    };

    // console.log(email);
    // console.log(password);

    const formData = new FormData();
    for (const key in data) {
      formData.append(key, data[key]);
    }

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
          />
        </Form.Group>

        <Form.Group className="login-input" controlId="formBasicPassword">
          <Form.Control size="lg" type="password" placeholder="Password" />
        </Form.Group>
        <div className="d-grid">
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Log In
          </button>
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
