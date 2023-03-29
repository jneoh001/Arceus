import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import RecommendedRecipesLI from '../../components/RecipeCard/RecommendedRecipesLI';
import RecipePage from '../../components/RecipePage/RecipePage'
import RecommendedRecipes from "../../components/RecipeCard/RecommendedRecipes";
import Search from '../../components/Search/Search';

function RecipeSearchPage() {
  return (
    <div className='LandingPage h-full'>
      <Navbar/>
      <div className="recipecards">
        <Search/>
        <RecommendedRecipes />
        <RecommendedRecipes />
        <RecommendedRecipes />
        <RecommendedRecipes />

        
        {/*}
        <SearchPageByID id={716420} />
        <SearchPageByID id={642605} />
        <SearchPageByID id={716356} />
  <SearchPageByID id={641904} />*/}
      </div>
    </div>
  )
}

export default RecipeSearchPage;