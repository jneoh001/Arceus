import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { useAuth } from "../../store/auth-context";
import RecipeCardHmepage from "./RecipeCardHmepage";

const RecommendedRecipesList = () => {
  const { userDetails } = useAuth();
  const apiKey = "0a76b05501d343a3865103c54309f7dd";
  const [recipeData, setRecipeData] = useState();
  useEffect(() => {
    if (userDetails) {
      axios
        .get(
          `https://api.spoonacular.com/recipes/findByNutrients?minCarbs=${
            userDetails.carbGoal / 3
          }&minCalories=${userDetails.calorieGoal / 3}&minProtein=${
            userDetails.proteinGoal / 3
          }&maxFat=${
            userDetails.fatGoal / 3
          }&number=5&random=true&apiKey=${apiKey}`
        )
        .then((response) => {
          setRecipeData(response.data);
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  }, [userDetails]);

  {
    /*(useEffect(() => {
    if (prevRecipeDataRef.current && prevRecipeDataRef.current.length === recipeData.length) {
      let same = true;
      for (let i = 0; i < recipeData.length; i++) {
        if (recipeData[i].id !== prevRecipeDataRef.current[i].id) {
          same = false;
          break;
        }
      }
      if (same) {
        console.log("Recipe data is the same!");
      } else {
        console.log("Recipe data has changed!");
      }
    }

    prevRecipeDataRef.current = recipeData;
  }, [recipeData]);*/
  }

  {
    /*useEffect(() => {
    if (userDetails) {
      axios
        .get(
          `https://api.spoonacular.com/recipes/findByNutrients?apiKey=${apiKey}&minCarbs=${
            userDetails.carbGoal / 3
          }
      &minCalories=${userDetails.calorieGoal / 3}&minProtein=${
            userDetails.proteinGoal / 3
          }&maxFat=${userDetails.fatGoal / 3}&number=5&random=true`
        )
        .then((res) => {
          // console.log(res.data);
          setRecipeData(res.data);
          localStorage.setItem("recipeData", JSON.stringify(res.data));
        })
        .catch((error) => console.log(error));
    }
    else if (userDetails && recipeData){
      setRecipeData(JSON.parse(localStorage.getItem("recipeData")));
    }
  }, [userDetails]);
  {
    /*then in return, i use map to go through every object in the array and get their data*/
  }
  return (
    <div>
      {recipeData &&
        recipeData.map((recipe) => (
          <RecipeCardHmepage
            key={recipe.id}
            id={recipe.id}
            name={recipe.title}
            carbs={recipe.carbs}
            protein={recipe.protein}
            fats={recipe.fat}
            calories={recipe.calories}
            img={recipe.image}
          />
        ))}
    </div>
  );
};

export default RecommendedRecipesList;
