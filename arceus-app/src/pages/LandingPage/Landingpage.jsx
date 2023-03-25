import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import RecipeByID from "../../components/RecipeCard/RecipeByID";
import "./LandingPage.css";
import RecommendedRecipes from "../../components/RecipeCard/RecommendedRecipes";

const LandingPage = () => {
  return (
    <div className="LandingPage h-full">
      <Navbar />
      <h1 className="landingpageheader">Top Rated</h1>
      <div className="recipecards">
        <RecommendedRecipes />
        {/*<RecommendedRecipes/>
        <RecommendedRecipes/>
        <RecommendedRecipes/>
        <RecommendedRecipes/>
        <RecommendedRecipes/>*/}
      </div>
    </div>
  );
};

export default LandingPage;
