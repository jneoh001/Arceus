import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import RecipeByID from "../../components/RecipeCard/RecipeByID";
import "./LandingPage.css";
import RecommendedRecipes from "../../components/RecipeCard/RecommendedRecipes";
import Typewriter from "../../components/TypeWriter/Typewriter";
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

const LandingPage = () => {

 

  return (
  <div className="grid grid-rows-2 grid-cols-1 ">
   

    <Parallax pages={2} >
    <Navbar />

    <ParallaxLayer factor={1} 
                   speed={0.5}
                   offset={0}
                   style = {{backgroundColor: "#000000",
                             }}
    >
      <div id="typewriter" className="auto">
        <Typewriter />  
      </div>
    </ParallaxLayer>
    
    {/* <ParallaxLayer factor={1}
                   offset = {1}
    >
      <div id="gradient"></div>
    </ParallaxLayer> */}

      



    <ParallaxLayer offset={1} speed={0.5} factor={0.8}>
      <div className="LandingPage">
        

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
    </ParallaxLayer>

    </Parallax >
  </div>
  );
};

export default LandingPage;
