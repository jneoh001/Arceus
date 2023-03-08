import React, { useContext, useEffect, useState } from "react";
import { auth } from "../firebaseConfig";
import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";

const AuthContext = React.createContext({
  isLoggedIn: false,
  wrongPassword: false,
  userNotFound: false,
  currentUser: {},
});

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [wrongPassword, setWrongPassword] = useState(false);
  const [userNotFound, setUserNotFound] = useState(false);
  const [currentUser, setCurrentUser] = useState();

  const signup = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("Signed Up successfully!", user);
        setIsLoggedIn(true);
      })
      .catch((error) => {
        console.log(error.code);
      });
  };

  const login = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setIsLoggedIn(true);
        setWrongPassword(false);
        setUserNotFound(false);
        console.log("User logged In", user.uid);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Not logged In");
        console.log(errorCode);
        if (error.code == "auth/wrong-password") {
          setWrongPassword(true);
        }
      });
  };

  const logout = () => {
    signOut(auth)
      .then(() => {
        setIsLoggedIn(false);
        console.log("Sign-out successful.");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const resetPassword = (email) => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        console.log("Password reset email sent!");
        setUserNotFound(false);
        setWrongPassword(false);
      })
      .catch((error) => {
        if (error.code == "auth/user-not-found") {
          setUserNotFound(true);
        }
        console.log(error.code);
      });
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider
      value={{
        currentUser: currentUser,
        isLoggedIn: isLoggedIn,
        wrongPassword: wrongPassword,
        userNotFound: userNotFound,
        signup: signup,
        login: login,
        logout: logout,
        resetPassword: resetPassword,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
