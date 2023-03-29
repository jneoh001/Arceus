import React from "react";
import RecommendedRecipesLI from "../../components/RecipeCard/RecommendedRecipesLI";
import RecommendedRecipesList from "../../components/RecipeCard/RecommendedRecipeslist";
import Navbar from "../../components/Navbar/Navbar";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import "./HomePage.css";
import RecommendedRecipes from "../../components/RecipeCard/RecommendedRecipes";

const HomePage = () => {
  return (
    <div className="HomePage">
      <Navbar />
      <h1 className="homepageheader">Recommended Recipes</h1>
      <div className="recipecards">
                <RecommendedRecipesList />
      </div>
    </div>
  );
};

export default HomePage;
