import "bootstrap/dist/css/bootstrap.min.css";
import LoginCard from "./components/LoginCard/LoginCard";
import Navbar from "./components/Navbar/Navbar";
import RecipeCard from "./components/RecipeCard/RecipeCard";
import ReviewCard from "./components/ReviewCard/ReviewCard";

function App() {
  return (
    <div>
      <Navbar />
      <RecipeCard />
      <LoginCard />
      <ReviewCard />
    </div>
  );
}

export default App;
