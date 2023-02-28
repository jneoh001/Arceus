import { Routes, Route } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import HistoryCard from "./components/HistoryCard/HistoryCard";
import LoginCard from "./components/LoginCard/LoginCard";
import Navbar from "./components/Navbar/Navbar";
import RecipeCard from "./components/RecipeCard/RecipeCard";
import ReviewCard from "./components/ReviewCard/ReviewCard";
import recipelist from "./components/RecipeCard/recipelist";
import RecommendedRecipes from "./components/RecipeCard/RecommendedRecipes";
import RegistrationPage from "./components/RegistrationPage/RegistrationPage";

function App() {
  return (
    <div>
      <Navbar />
      <LoginCard />
      <ReviewCard />
      <HistoryCard />
      <RegistrationPage />
      {/* <RecommendedRecipes />
      <RecommendedRecipes />
      <RecommendedRecipes /> */}
    </div>
  );
}
export default App;
