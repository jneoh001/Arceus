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
        <RecipeByID id={716429} />
        <RecipeByID id={642605} />
        <RecipeByID id={716356} />
        <RecipeByID id={641904} />
      </div>
    </div>
  );
};

export default LandingPage;
