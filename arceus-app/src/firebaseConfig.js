// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  browserSessionPersistence,
  getAuth,
  setPersistence,
} from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // appId: process.env.REACT_APP_FIREABSE_APP_ID,
  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: "1:53558932997:web:55bfd280308223b42d0e6c",
  apiKey: "AIzaSyDZcYpaXkWN0OIlKpsIyWlRPSTXtOxU9dY",
  authDomain: "sc2006-arceus-f7ba8.firebaseapp.com",
  databaseURL:
    "https://sc2006-arceus-f7ba8-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "sc2006-arceus-f7ba8",
  storageBucket: "sc2006-arceus-f7ba8.appspot.com",
  messagingSenderId: "53558932997",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(firebaseApp);

setPersistence(auth, browserSessionPersistence)
  .then(() => {
    // console.log("Session enabled");
  })
  .catch((error) => {
    console.log(error.code);
  });

// Initialize Cloud Firestore and get a reference to the service
export const db = getDatabase(firebaseApp);

// Initialize Cloud Storage and get a reference to the service
export const storage = getStorage(firebaseApp);
