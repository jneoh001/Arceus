import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import RecipePage from '../../components/RecipePage/RecipePage'
import Search from '../../components/Search/Search';
import Searched from './Searched';

function RecipeSearchPage() {
  return (
    <div className='LandingPage h-full'>
      <Navbar/>
      <div className="recipecards">
        {/* <Searched/> */}
        <Search/>
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