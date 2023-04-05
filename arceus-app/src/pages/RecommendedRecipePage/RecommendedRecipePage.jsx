import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import RecommendedRecipesLI from '../../components/RecipeCard/RecommendedRecipesLI';
import {motion} from 'framer-motion'

function RecommendedRecipePage() {
  return (
    <motion.div
    initial={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity:0}}
    >
        <Navbar/>
        <RecommendedRecipesLI/>
    </motion.div>
  )
}

export default RecommendedRecipePage;