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
import RecipePage from "./components/RecipePage/RecipePage";


function App() {
  return (
    <div className="bg-[#FFFBEB]">
      <Navbar />
      <LoginCard />
      <HistoryCard />
      <RegistrationPage />
      <EditProfile />
      <MyProfile />
      <LeaveReviewCard id={716429} /> 
      <RecipePage />
      <Tracker /> 
    </div>
  );
}
export default App;
