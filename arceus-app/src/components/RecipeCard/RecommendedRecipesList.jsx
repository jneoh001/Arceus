import axios from "axios";
import { useEffect, useState, useRef } from "react";
/*database imports*/
import { db } from "../../firebaseConfig";
import { useAuth } from "../../store/auth-context";
import { ref, child, get, onValue } from "firebase/database";
import RecipeCardHmepage from "./RecipeCardHmepage";

const RecommendedRecipesList = () => {
  const { userDetails } = useAuth();
  const apiKey = "1bf290a35f8c49c8a844be86f6575f28";

  const [id, setID] = useState();
  const [recipeData, setRecipeData] = useState([]);
  const prevRecipeDataRef = useRef();

  useEffect(() => {
    const fetchRecipeData = async () => {
      try {
        if (userDetails) {
          const response = await axios.get(
            `https://api.spoonacular.com/recipes/findByNutrients?apiKey=${apiKey}&minCarbs=${
              userDetails.carbGoal / 3
            }
        &minCalories=${userDetails.calorieGoal / 3}&minProtein=${
              userDetails.proteinGoal / 3
            }&maxFat=${userDetails.fatGoal / 3}&number=5&random=true`
          );
          setRecipeData(response.data);
          console.log(response.data)
          console.log(userDetails)
        }
      } catch (error) {
        console.log(error);
      }
    };
  
    fetchRecipeData();
  }, [userDetails]);

  
  {/*(useEffect(() => {
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
  }, [recipeData]);*/}


  {/*useEffect(() => {
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
        })
        .catch((error) => console.log(error));
    }
  }, [userDetails]);*/}
  {
    /*then in return, i use map to go through every object in the array and get their data*/
  }
  return recipeData.map((recipe) => (
    <RecipeCardHmepage
      key = {recipe.id}
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
