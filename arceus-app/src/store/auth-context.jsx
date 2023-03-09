import React, { useContext, useEffect, useState } from "react";
import { auth, db } from "../firebaseConfig";
import { update, ref } from "firebase/database";
import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";

const AuthContext = React.createContext({
  isLoggedIn: false,
  wrongPassword: false,
  userNotFound: false,
  emailInUse: false,
  currentUser: {},
});

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [wrongPassword, setWrongPassword] = useState(false);
  const [userNotFound, setUserNotFound] = useState(false);
  const [emailInUse, setEmailInUse] = useState(false);
  const [currentUser, setCurrentUser] = useState();

  const signup = (email, password, profile) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("Signed Up successfully!", user);
        setEmailInUse(false);
        setIsLoggedIn(true);
        const endpt = "users-profile";
        const updates = {};
        updates["/" + endpt + "/" + user.uid + "/details"] = profile;
        update(ref(db), updates);
      })
      .catch((error) => {
        console.log(error.code);
        if (error.code == "auth/email-already-in-use") {
          setEmailInUse(true);
        }
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
        emailInUse: emailInUse,
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
