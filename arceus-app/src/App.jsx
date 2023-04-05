import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
// import HistoryCard from "./components/HistoryCard/HistoryCard";
// import LoginCard from "./components/LoginCard/LoginCard";
// import Navbar from "./components/Navbar/Navbar";
// import LeaveReviewCard from "./components/Review/LeaveReviewCard";
// import RecipeByID from "./components/RecipeCard/RecipeByID";
// import RecommendedRecipes from "./components/RecipeCard/RecommendedRecipes";
// import RegistrationPage from "./components/RegistrationCard/RegistrationCard";
// import EditProfile from "./components/EditProfile/EditProfile";
// import MyProfile from "./components/MyProfile/MyProfile";
// import ViewReview from "./components/Review/ViewReview";
// import Tracker from "./components/Tracker/Tracker";
// import RecommendedRecipesLI from "./components/RecipeCard/RecommendedRecipesLI";
import AnimatedRoutes from "./components/AnimatedRoutes/AnimatedRoutes";

function App() {
  return (
    <div className="bg-[#FFFBEB]">
      {/* <Navbar />
      <LoginCard />
      <HistoryCard />
      <RegistrationPage />
      <EditProfile />
      <MyProfile />
      <LeaveReviewCard id={716429} />
      <HomePage/>
      {/*<ViewReview id={716429} />*/}
      {/*<RecipeByID id={716429} />
      <RecommendedRecipes />
      <RecommendedRecipes />
      <RecommendedRecipes />
      <LandingPage /> 
      <LoginPage /> 
      <GoalPage />
  <HistoryPage />*/}
      {/*
      <ViewReview id={716429} />
      <HistoryPage />*/}
      {/* <ViewReview id={716429} />
      <LeaveReviewCard id={716429} />
      <RecipeByID id={716429} />
      <SearchPageByID id={716429} />*/}
      {/* <RecommendedRecipes />
      <RecommendedRecipes />
      <RecommendedRecipes />
      <RecommendedRecipes />
      <RecommendedRecipes /> 
      <LoginPage />
      <GoalPage /> 
      <LandingPage />
      <HistoryPage />  */}

      {/* <MyProfile /> */}
      {/* New Code with Routing */}
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
      {/* <RecommendedRecipesLI /> */}

      {/* <RecipePage recipeid= {2} /> */}
    </div>
  );
}
export default App;
