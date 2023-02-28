import { Routes, Route } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import EditProfile from "./components/EditProfile/EditProfile";
import HistoryCard from "./components/HistoryCard/HistoryCard";
import LoginCard from "./components/LoginCard/LoginCard";
import Navbar from "./components/Navbar/Navbar";
import RecipeCard from "./components/RecipeCard/RecipeCard";
import ReviewCard from "./components/ReviewCard/ReviewCard";
import recipelist from "./components/RecipeCard/recipelist";
import RegistrationPage from "./components/RegistrationPage/RegistrationPage";

function App() {
  return (
    <RegistrationPage />
  );
}

export default App;
