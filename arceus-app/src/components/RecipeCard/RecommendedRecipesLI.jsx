import axios from "axios";
import RecipeCard from "./RecipeCard";
import { useEffect, useState } from "react";
/*database imports*/
import { db } from "../../firebaseConfig";
import { useAuth } from "../../store/auth-context";
import { ref, child, get, onValue } from "firebase/database";

const RecommendedRecipesLI = () => {
  const { userDetails } = useAuth();
  console.log(userDetails);
  const apiKey = "887452d55d564c2d89b9eba52e001c4c";

  const [id, setID] = useState();
  const [recipeData, setRecipeData] = useState({});

  useEffect(() => {
    if (userDetails) {
      axios
        .get(
          `https://api.spoonacular.com/recipes/findByNutrients?apiKey=${apiKey}&minCarbs=${
            userDetails.carbGoal / 3
          }
      &minCalories=${userDetails.calorieGoal / 3}&minProtein=${
            userDetails.proteinGoal / 3
          }&maxFat=${userDetails.fatGoal / 3}&number=1&random=true`
        )
        .then((res) => {
          const curID = res.data[0].id;
          // console.log(curID);
          setID(curID);
          return axios.get(
            "https://api.spoonacular.com/recipes/" +
              curID +
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
    }
  }, [userDetails]);

  return (
    <RecipeCard
      id={id}
      name={recipeData.title}
      carbs={recipeData.carbs}
      protein={recipeData.protein}
      fats={recipeData.fats}
      calories={recipeData.calories}
      img={recipeData.img}
    />
  );
};

export default RecommendedRecipesLI;
