import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import RecommendedRecipesLI from '../../components/RecipeCard/RecommendedRecipesLI';
import RecipePage from '../../components/RecipePage/RecipePage'
import RecommendedRecipes from "../../components/RecipeCard/RecommendedRecipes";
import Search from '../../components/Search/Search';
import Searched from './Searched';
import RecommendedRecipesList from '../../components/RecipeCard/RecommendedRecipesList';

function RecipeSearchPage() {
  return (
    <div className='LandingPage'>
      <Navbar/>
      <div className="recipecards px-16">
        <Search/>
      </div>
    </div>
  )
}

export default RecipeSearchPage;