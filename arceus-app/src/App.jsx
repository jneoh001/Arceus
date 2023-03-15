import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import HistoryCard from "./components/HistoryCard/HistoryCard";
import LoginCard from "./components/LoginCard/LoginCard";
import Navbar from "./components/Navbar/Navbar";
import LeaveReviewCard from "./components/Review/LeaveReviewCard";
import RecommendedRecipes from "./components/RecipeCard/RecommendedRecipes";
import RegistrationPage from "./components/RegistrationPage/RegistrationPage";
import EditProfile from "./components/EditProfile/EditProfile";
import MyProfile from "./components/MyProfile/MyProfile";
import Tracker from "./components/Tracker/Tracker";
import ViewReview from "./components/Review/ViewReview";
import RecipeByID from "./components/RecipeCard/RecipeByID";
import LandingPage from "./pages/LandingPage/Landingpage";
import LoginPage from "./pages/LoginPage/LoginPage";
import GoalPage from "./pages/GoalPage/GoalPage";

function App() {
  return (
    <div className="bg-amber-100">
      {/* <Navbar />
      <Tracker />
      <LoginCard />
      <HistoryCard />
      <RegistrationPage />
      <EditProfile />
      <MyProfile />
      <LeaveReviewCard id={716429} />
      <ViewReview id={716429} />
      <RecipeByID id={716429} />
      <RecommendedRecipes />
      <RecommendedRecipes />
      <RecommendedRecipes />
      <LandingPage /> */}
      {/* <LoginPage /> */}
      <GoalPage />
    </div>
  );
}
export default App;
