import React, { useContext, useEffect, useState } from "react";
import getDate from "../helpers/getDate";
import { auth, db } from "../firebaseConfig";
import { update, ref, get, child, onValue } from "firebase/database";
import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const AuthContext = React.createContext({
  isLoggedIn: false,
  wrongPassword: false,
  userNotFound: false,
  emailInUse: false,
  currentUser: {},
  userDetails: {},
  userHistory: [],
  userIntake: {},
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
  const [userDetails, setUserDetails] = useState();
  const [userHistory, setUserHistory] = useState();
  const [userIntake, setUserIntake] = useState();

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

  const editUserProfile = (profile) => {
    console.log(profile);
    const updates = {};
    updates["/users-profile/" + currentUser.uid + "/details"] = profile;
    update(ref(db), updates);
    console.log("db updated");
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  // Get user's profile details
  useEffect(() => {
    if (currentUser) {
      get(child(ref(db), "users-profile/" + currentUser.uid + "/details"))
        .then((snapshot) => {
          if (snapshot.exists()) {
            setUserDetails(snapshot.val());
          } else {
            console.log("No data available");
          }
        })
        .catch((error) => {
          console.error(error);
        });

      onValue(
        child(ref(db), "users-profile/" + currentUser.uid + "/details"),
        (snapshot) => {
          setUserDetails(snapshot.val());
        }
      );
    }
  }, [currentUser]);

  // Get user's history
  useEffect(() => {
    if (currentUser) {
      get(child(ref(db), "users-profile/" + currentUser.uid + "/history"))
        .then((snapshot) => {
          if (snapshot.exists()) {
            setUserHistory(Object.values(snapshot.val()).reverse());
          }
        })
        .catch((error) => {
          console.log(error.code);
        });
      onValue(
        child(ref(db), "users-profile/" + currentUser.uid + "/history"),
        (snapshot) => {
          setUserHistory(Object.values(snapshot.val()).reverse());
        }
      );
    }
  }, [currentUser]);

  // Get user's today's intake
  useEffect(() => {
    if (currentUser) {
      const [todayID, todayDisplay] = getDate();
      get(
        child(
          ref(db),
          "users-profile/" + currentUser.uid + "/history/" + todayID
        )
      )
        .then((snapshot) => {
          if (snapshot.exists()) {
            console.log(snapshot.val());
            setUserIntake({
              carb: snapshot.val().carbIntake,
              protein: snapshot.val().proteinIntake,
              fat: snapshot.val().fatIntake,
              calorie: snapshot.val().calorieIntake,
            });
          } else {
            setUserIntake({
              carb: 0,
              protein: 0,
              fat: 0,
              calorie: 0,
            });
          }
        })
        .catch((error) => {
          console.log(error.code);
        });
      onValue(
        child(
          ref(db),
          "users-profile/" + currentUser.uid + "/history/" + todayID
        ),
        (snapshot) => {
          setUserIntake({
            carb: snapshot.val().carbIntake,
            protein: snapshot.val().proteinIntake,
            fat: snapshot.val().fatIntake,
            calorie: snapshot.val().calorieIntake,
          });
        }
      );
    }
  }, [currentUser]);

  return (
    <AuthContext.Provider
      value={{
        currentUser: currentUser,
        isLoggedIn: isLoggedIn,
        wrongPassword: wrongPassword,
        userNotFound: userNotFound,
        emailInUse: emailInUse,
        userDetails: userDetails,
        userHistory: userHistory,
        userIntake: userIntake,
        signup: signup,
        login: login,
        logout: logout,
        resetPassword: resetPassword,
        editUserProfile: editUserProfile,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
