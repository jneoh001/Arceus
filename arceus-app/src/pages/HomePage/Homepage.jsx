import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import RecommendedRecipesList from "../../components/RecipeCard/RecommendedRecipesList"; 
import "./HomePage.css";
import {motion} from 'framer-motion'

const HomePage = () => {
  return (
    <motion.div className="HomePage"
      initial={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity:0}}
    >
      <Navbar />
      <h1 className="homepageheader">Recommended Recipes</h1>
      <div className="recipecards">
                <RecommendedRecipesList />
      </div>
    </motion.div>
  );
};

export default HomePage;
