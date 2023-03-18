import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import HistoryCard from "./components/HistoryCard/HistoryCard";
import LoginCard from "./components/LoginCard/LoginCard";
import Navbar from "./components/Navbar/Navbar";
import LeaveReviewCard from "./components/Review/LeaveReviewCard";
import RecipeByID from "./components/RecipeCard/RecipeByID";
import RecommendedRecipes from "./components/RecipeCard/RecommendedRecipes";
import RegistrationPage from "./components/RegistrationPage/RegistrationPage";
import EditProfile from "./components/EditProfile/EditProfile";
import MyProfile from "./components/MyProfile/MyProfile";
import RecipePage from "./components/RecipePage/RecipePage";
import ViewReview from "./components/Review/ViewReview";
import GoalPage from "./pages/GoalPage/GoalPage";

function App() {
  return (
    <div className="bg-[#FFFBEB]">
      {/* <Navbar />
      <LoginCard />
      <HistoryCard />
      <RegistrationPage />
      <EditProfile />
      
      <MyProfile /> */}
      <ViewReview id={716429} />
      <LeaveReviewCard id={716429} />
      <RecipeByID id={716429} />

      {/* <RecommendedRecipes />
      <RecommendedRecipes />
      <RecommendedRecipes /> */}
      {/* <LandingPage /> */}
      {/* <LoginPage /> */}
      {/* <GoalPage /> */}
      {/* <HistoryPage /> */}
      {/* <RecipePage /> */}
      
    </div>
  );
}
export default App;
