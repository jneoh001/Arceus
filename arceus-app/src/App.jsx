import "bootstrap/dist/css/bootstrap.min.css";
import HistoryCard from "./components/HistoryCard/HistoryCard";
import LoginCard from "./components/LoginCard/LoginCard";
import Navbar from "./components/Navbar/Navbar";
import RecipeCard from "./components/RecipeCard/RecipeCard";
import ReviewCard from "./components/ReviewCard/ReviewCard";
import recipelist from "./components/RecipeCard/recipelist";

function App() {
  return (
    <div>
      <Navbar />
      <LoginCard />
      <ReviewCard />
      <HistoryCard />
      {recipelist.map((recipe) => {
        return (
          <RecipeCard
            name={recipe.recipeName}
            carbs={recipe.carbohydrates}
            protein={recipe.protein}
            fats={recipe.fats}
            img={recipe.img}
            rating={recipe.rating}
          />
        );
      })}
    </div>
  );
}

export default App;
