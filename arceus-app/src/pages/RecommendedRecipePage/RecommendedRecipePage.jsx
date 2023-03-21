import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import RecommendedRecipesLI from '../../components/RecipeCard/RecommendedRecipesLI';

function RecommendedRecipePage() {
  return (
    <div>
        <Navbar/>
        <RecommendedRecipesLI/>
    </div>
  )
}

export default RecommendedRecipePage;