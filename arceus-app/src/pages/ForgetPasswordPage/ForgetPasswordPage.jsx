import Navbar from "../../components/Navbar/Navbar";
import { useRef, useState } from "react";
import { useAuth } from "../../store/auth-context";
import { useNavigate } from "react-router-dom";
import {motion} from 'framer-motion';

const ForgetPasswordPage = () => {
  const emailRef = useRef();
  const navigate = useNavigate();
  const { resetPassword } = useAuth();
  const [error, setError] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const submitHandler = (e) => {
    const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (pattern.test(emailRef.current.value)) {
      resetPassword(emailRef.current.value);
      setIsSent(true);
      setTimeout(() => {
        setIsSent(false);
        navigate("/login");
      }, 2000);
    } else {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2000);
    }
    e.preventDefault();
  };
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    >
      <Navbar />
      <div className="flex flex-col items-center justify-center mt-12 text-white">
        {isSent && (
          <div
            className="w-1/3 flex p-4 mb-2 text-sm text-green-800 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 dark:border-green-800"
            role="alert"
          >
            <svg
              aria-hidden="true"
              className="flex-shrink-0 inline w-5 h-5 mr-3"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Info</span>
            <div>
              <span className="font-medium"></span> Password Reset Email is
              sent! Check your email.
            </div>
          </div>
        )}
        {error && (
          <div
            className="w-1/3 flex p-4 mb-2 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
            role="alert"
          >
            <svg
              aria-hidden="true"
              className="flex-shrink-0 inline w-5 h-5 mr-3"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Info</span>
            <div>
              <span className="font-medium">Invalid email</span>
            </div>
          </div>
        )}
        <div className="bg-slate-700 p-16 w-2/3 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-[10px]">
          <h2 className="text-3xl font-semibold mb-2">Forgot Your Password?</h2>
          <p className="text-lg mb-6">
            Enter the email address associated with your account and we'll send
            you a link to reset your password.{" "}
          </p>

          <label for="input-group-1" class="block mb-2 text-lg font-medium ">
            Your Email
          </label>
          <div class="relative mb-6">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
            </div>
            <input
              ref={emailRef}
              type="email"
              id="input-group-1"
              className="bg-white w-full rounded-full py-2 px-12 text-black"
              placeholder="name@email.com"
            />
          </div>
          <button
            onClick={submitHandler}
            type="submit"
            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Reset my password
          </button>
        </div>
      </div>{" "}
    </motion.div>
  );
};

export default ForgetPasswordPage;
