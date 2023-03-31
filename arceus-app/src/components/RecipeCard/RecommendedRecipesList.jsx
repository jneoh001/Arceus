import axios from "axios";
import { useEffect, useState } from "react";
/*database imports*/
import { db } from "../../firebaseConfig";
import { useAuth } from "../../store/auth-context";
import { ref, child, get, onValue } from "firebase/database";
import RecipeCardHmepage from "./RecipeCardHmepage";

const RecommendedRecipesList = () => {
  const { userDetails } = useAuth();
  const apiKey = "cb1c464d94f142c08b156c5beddade8b";

  const [id, setID] = useState();
  const [recipeData, setRecipeData] = useState([]);

  useEffect(() => {
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
          {
            /*response is an array, each recipe is an object inside. so i put inside recipeData which 
        i initialize as an array*/
          }
          // console.log(res.data);
          setRecipeData(res.data);
        })
        .catch((error) => console.log(error));
    }
  }, [userDetails]);
  {
    /*then in return, i use map to go through every object in the array and get their data*/
  }
  return recipeData.map((recipe) => (
    <RecipeCardHmepage
      id={recipe.id}
      name={recipe.title}
      carbs={recipe.carbs}
      protein={recipe.protein}
      fats={recipe.fat}
      calories={recipe.calories}
      img={recipe.image}
    />
  ));
};

export default RecommendedRecipesList;
