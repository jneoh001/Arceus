import React, { useEffect, useState } from "react";
import axios from "axios";
import "./RecipePage.css";

export default function RecipePage() {
  const apiKey = "7f8b79cf24094b52953b2d594e02f04e ";
  const [recipeData, setRecipeData] = useState({});
  const [ingredientWidget, setIngredientWidget] = useState();

  useEffect(() => {
    axios
      .get("https://api.spoonacular.com/recipes/2/information?apiKey=" + apiKey)
      // .then(response => {
      //     //console.log(response)
      //     setRecipeData({img: response.data.img})
      //     console.log(recipeData)

      // })
      .then((response) => {
        setRecipeData({
          img: response.data.image,
          instructions: response.data.instructions,
        });
      })

      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    axios
      .get(
        "https://api.spoonacular.com/recipes/2/ingredientWidget.png?apiKey=" +
          apiKey
      )
      .then((response) => {
        setIngredientWidget(response.config.url);
      })

      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="recipe-page-container">
      <div className="w-5/6 grid gap-0 grid-rows-2 grid-cols-2 ml-16">
        {/*Picture 1st Item */}
        <div className="ml-20 mt-16">
          <img class="rounded-lg" src={recipeData.img} />
        </div>

        {/*Preparation Portion */}
        <div className="preparation-container">
          <h2 class=" text-center text-3xl mb-2 mt-2" id="recipePageHeader">
            Preparation
          </h2>
          <hr />

          <p
            className="text-center mt-2 text-2xl"
            dangerouslySetInnerHTML={{ __html: recipeData.instructions }}
          ></p>
        </div>

        {/*<div class="basis-1/2">
                <h1>reviews, like, add review, add to tracker</h1>
            </div> */}

        <div className="w-1/3"></div>

        {/*Ingredients Portion - 3rd Item*/}
        <div class="order-4">
          <h2 class="text-center text-3xl mb-2" id="recipePageHeader">
            Ingredients
          </h2>

          <hr className="" />

          <img class="m-auto" src={ingredientWidget} />
        </div>
      </div>

      {/* <button className="button">
                Ingredient
        </button> */}
    </div>
  );
}
