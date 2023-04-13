import RecipeCard from "./RecipeCard";
import axios from "axios";
import { useState, useEffect } from "react";

const RecipeByID = (props) => {
  const apiKey = "932d3ebd474e47bdb60c260d7b5a2b1e";
  const [recipeData, setRecipeData] = useState({});

  useEffect(() => {
    axios
      .get(
        "https://api.spoonacular.com/recipes/" +
          props.id +
          "/information?includeNutrition=true&apiKey=" +
          apiKey
      )
      .then((info) => {
        setRecipeData({
          title: info.data.title,
          img: info.data.image,
          calories: info.data.nutrition.nutrients[0].amount,
          fats: info.data.nutrition.nutrients[1].amount,
          carbs: info.data.nutrition.nutrients[3].amount,
          protein: info.data.nutrition.nutrients[9].amount,
        });
      })
      .catch((error) => {
        console.log(error.code);
      });
  }, []);
  return (
    <RecipeCard
      id={props.id}
      name={recipeData.title}
      carbs={recipeData.carbs}
      protein={recipeData.protein}
      fats={recipeData.fats}
      calories={recipeData.calories}
      img={recipeData.img}
    />
  );
};

export default RecipeByID;
