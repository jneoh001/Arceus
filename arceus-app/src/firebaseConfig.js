// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZcYpaXkWN0OIlKpsIyWlRPSTXtOxU9dY",
  authDomain: "sc2006-arceus-f7ba8.firebaseapp.com",
  databaseURL: "https://sc2006-arceus-f7ba8-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "sc2006-arceus-f7ba8",
  storageBucket: "sc2006-arceus-f7ba8.appspot.com",
  messagingSenderId: "53558932997",
  appId: "1:53558932997:web:55bfd280308223b42d0e6c",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(firebaseApp);

// Initialize Cloud Firestore and get a reference to the service
export const db = getDatabase(firebaseApp);

// Initialize Cloud Storage and get a reference to the service
export const storage = getStorage(firebaseApp);
