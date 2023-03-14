import { Routes, Route } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import HistoryCard from "./components/HistoryCard/HistoryCard";
import LoginCard from "./components/LoginCard/LoginCard";
import Navbar from "./components/Navbar/Navbar";
import RecipeCard from "./components/RecipeCard/RecipeCard";
import LeaveReviewCard from "./components/Review/LeaveReviewCard";
import RecommendedRecipes from "./components/RecipeCard/RecommendedRecipes";
import RegistrationPage from "./components/RegistrationPage/RegistrationPage";
import EditProfile from "./components/EditProfile/EditProfile";
import MyProfile from "./components/MyProfile/MyProfile";
import ReviewCard from "./components/Review/ReviewCard";
import RecipePage from "./components/RecipePage/RecipePage";

function App() {
  return (
    <div className="bg-amber-100">
      {/* <Navbar />
      <LoginCard />
      <HistoryCard />
      <RegistrationPage />
      <EditProfile />
      <MyProfile /> */}
      <LeaveReviewCard id={716429} />
      {/* <ReviewCard id={716429} />
      <RecommendedRecipes />
      <RecommendedRecipes /> 
      <RecommendedRecipes />   */}
      <RecipePage /> 
    </div>
  );
}
export default App;
