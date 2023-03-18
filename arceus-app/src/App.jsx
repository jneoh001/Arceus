import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Pages from "./pages/Pages";
import HistoryCard from "./components/HistoryCard/HistoryCard";
import LoginCard from "./components/LoginCard/LoginCard";
import Navbar from "./components/Navbar/Navbar";
import LeaveReviewCard from "./components/Review/LeaveReviewCard";
import RecipeByID from "./components/RecipeCard/RecipeByID";
import RecommendedRecipes from "./components/RecipeCard/RecommendedRecipes";
import RegistrationPage from "./components/RegistrationCard/RegistrationCard";
import EditProfile from "./components/EditProfile/EditProfile";
import MyProfile from "./components/MyProfile/MyProfile";
import RecipePage from "./components/RecipePage/RecipePage";
import ViewReview from "./components/Review/ViewReview";
import GoalPage from "./pages/GoalPage/GoalPage";

function App() {
  return (
    <div className="bg-[#FFFBEB]">
      {/* 
      Legacy Code
      <Navbar />
      <LoginCard />
      <HistoryCard />
      <RegistrationPage />
      <EditProfile />
      <MyProfile /> */}
      <ViewReview id={716429} />
      <LeaveReviewCard id={716429} />
      <RecipeByID id={716429} />
      <RecommendedRecipes />
      <RecommendedRecipes />
      <RecommendedRecipes /> 
      <LandingPage />
      <LoginPage />
      <GoalPage /> 
      <HistoryPage /> 
      */}
      {/* New Code with Routing */}
      <BrowserRouter>
        <Pages/>
      </BrowserRouter>
    </div>
  );
}
export default App;
