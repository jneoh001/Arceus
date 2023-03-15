import axios from "axios";
import RecipeCard from "./RecipeCard";
import { useEffect, useState } from "react";

const RecommendedRecipes = () => {
  const [id, setID] = useState();
  const [recipeData, setRecipeData] = useState({});
  const apiKey = "d397c8afbfd343cbae5ab63b787f199a";

  useEffect(() => {
    axios
      .get(
        "https://api.spoonacular.com/recipes/random?number=1&apiKey=" + apiKey
      )
      .then((response) => {
        const id = response.data.recipes[0].id;
        setID(id);
        return axios.get(
          "https://api.spoonacular.com/recipes/" +
            id +
            "/information?includeNutrition=true&apiKey=" +
            apiKey
        );
      })
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

      .catch((error) => console.log(error));
  }, []);

  return (
    <RecipeCard
      id={id}
      name={recipeData.title}
      carbs={recipeData.carbs}
      protein={recipeData.protein}
      fats={recipeData.fats}
      calories={recipeData.calories}
      img={recipeData.img}
      rating={5}
    />
  );
};

export default RecommendedRecipes;
