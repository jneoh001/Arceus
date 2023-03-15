import React from "react";
import Navbar from "../Navbar/Navbar";
import RecipeCard from "../RecipeCard/RecipeCard";
import RecommendedRecipes from "../RecipeCard/RecommendedRecipes";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="LandingPage">
      <Navbar />
      <h1 className="landingpageheader">Recommended Recipes</h1>
      <div className="recipecards">
        {/* <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard /> */}
        <RecommendedRecipes />
        <RecommendedRecipes />
        <RecommendedRecipes />
        <RecommendedRecipes />
        <RecommendedRecipes />
      </div>
    </div>
  );
};

export default LandingPage;
