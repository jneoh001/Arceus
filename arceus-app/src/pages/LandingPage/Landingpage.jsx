import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import RecipeByID from "../../components/RecipeCard/RecipeByID";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="LandingPage h-full">
      <Navbar />
      <h1 className="landingpageheader">Top Rated</h1>
      <div className="recipecards">
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
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
