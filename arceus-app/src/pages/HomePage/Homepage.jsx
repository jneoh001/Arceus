import React from "react";
import RecommendedRecipesLI from "../../components/RecipeCard/RecommendedRecipesLI";
import RecommendedRecipesList from "../../components/RecipeCard/RecommendedRecipeslist";
import Navbar from "../../components/Navbar/Navbar";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="HomePage">
      <Navbar />
      <h1 className="homepageheader">Recommended Recipes</h1>
      <div className="recipecards">
        <RecommendedRecipesLI />
        {/* <RecommendedRecipesLI />
                <RecommendedRecipesLI />
                <RecommendedRecipesLI />
                <RecommendedRecipesLI /> */}
      </div>
    </div>
  );
};

export default HomePage;
