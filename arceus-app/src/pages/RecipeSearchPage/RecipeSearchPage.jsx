import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import RecommendedRecipesLI from '../../components/RecipeCard/RecommendedRecipesLI';
import RecipePage from '../../components/RecipePage/RecipePage'
import RecommendedRecipes from "../../components/RecipeCard/RecommendedRecipes";
import Search from '../../components/Search/Search';
import Searched from './Searched';
import RecommendedRecipesList from '../../components/RecipeCard/RecommendedRecipesList';
import {motion} from 'framer-motion'

function RecipeSearchPage() {
  return (
    <motion.div className='LandingPage'
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    >
      <Navbar/>
      <div className="recipecards px-16">
        <Search/>
      </div>
    </motion.div>
  )
}

export default RecipeSearchPage;