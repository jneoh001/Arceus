import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import RecipeByID from "../../components/RecipeCard/RecipeByID";
import "./LandingPage.css";
import RecommendedRecipes from "../../components/RecipeCard/RecommendedRecipes";

const LandingPage = () => {
  return (
  <div className="grid grid-rows-2 grid-cols-1 ">
    <Navbar />

    {/* <div className="LandingPageTop">
       <div className="static-txt">One Stop</div>
       <ul className="dynamic-txts">
        <li><span>Recipes</span></li> 
        <li><span>Tracker</span></li> 
        <li><span>Solution</span></li> 
       </ul>
    </div> */}

    <div className="LandingPage h-full">
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
  </div>
  );
};

export default LandingPage;
