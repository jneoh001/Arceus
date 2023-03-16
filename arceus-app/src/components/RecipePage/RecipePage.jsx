import React, { useEffect, useState } from 'react';
import axios from 'axios';


export default function RecipePage() {

    const apiKey = "2e141398c9fe42e29876fda0a0c27218";
    const [recipeData, setRecipeData] = useState({});
    const [ingredientWidget, setIngredientWidget] = useState();

    useEffect( ()=> {
        axios
            .get("https://api.spoonacular.com/recipes/1/information?apiKey=" + apiKey)
            // .then(response => {
            //     //console.log(response)
            //     setRecipeData({img: response.data.img})
            //     console.log(recipeData)
                
            // })
            .then(response => {
                setRecipeData({
                    img: response.data.image 
                }
                )
            })

            .catch( (error)=>console.log(error))
    }, [])

    // useEffect( ()=> {
    //     axios
    //         .get("https://api.spoonacular.com/recipes/1/ingredientWidget.png?apiKey=" + apiKey)
    //         // .then(response => {
    //         //     //console.log(response)
    //         //     setRecipeData({img: response.data.img})
    //         //     console.log(recipeData)
                
    //         // })
    //         .then(response => {
    //             console.log(response)
    //             setIngredientWidget(
    //                 response.data 
                
    //             )
    //         })

    //         .catch( (error)=>console.log(error))
    // }, [])


  return (
    <div>

        
        <div class="w-2/3 flex flex-wrap flex-row bg-amber-200 ">
        
            <img
            class="w-1/3  border-4 border-wwhite rounded-lg ml-5 mt-5"
            src={recipeData.img}
            />    

            {/*Ingredients Portion*/}
            <div class="w-1/3 ml-auto mb-auto mr-auto">
                <h2 class="text-center underline bold text-3xl">Ingredients</h2>
                
            </div>

            {/* <div class="basis-1/2">
                <h1>reviews, like, add review, add to tracker</h1>
            </div>
            
            <div class="basis-1/2">
                <h2 class="text-center underline bold text-3xl">Preparation</h2>
            </div> */}
    
        </div>

        {/* <p dangerouslySetInnerHTML={{__html: ingredientWidget}}></p> */}
    </div>
  )
}
