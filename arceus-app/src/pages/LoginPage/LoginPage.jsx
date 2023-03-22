import LoginCard from "../../components/LoginCard/LoginCard";
import Navbar from "../../components/Navbar/Navbar";
import { useLocation } from "react-router-dom";
import {CSSTransition} from 'react-transition-group';
import { useState,useEffect } from "react";

function RerouteHandler(){
  const location = useLocation();
  const [isShowing, setIsShowing] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [messageStyle, setMessageStyle] = useState("");
  const successClassName = "bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative";
  const errorClassName = "bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"; 
  
  useEffect(() => {
    const error = location.state?.message;
    console.log(error=="You must be logged in to access this page.")
    if (error) {
      setErrorMessage(error);
      setIsShowing(true);
      setTimeout(() => {
        setIsShowing(false);
      }, 5000);
      if(error == "You must be logged in to access this page."){
        setMessageStyle(errorClassName);
      }
      else{
        setMessageStyle(successClassName);
      }
      console.log(messageStyle);
    }
  }, [location.state]);

  return (
    <div>
      <CSSTransition
        in={isShowing}
        timeout={500}
        classNames="fade"
        unmountOnExit
      >
        <div className={messageStyle}>
          <p>{errorMessage}</p>
        </div>
      </CSSTransition>
    </div>
  );
}

const LoginPage = () => {
  return (
    <div className="h-screen">
      <Navbar />
      <div className="flex flex-col justify-center items-center mt-20">
        <RerouteHandler/>
        <LoginCard />
      </div>
    </div>
  );
};

export default LoginPage;
