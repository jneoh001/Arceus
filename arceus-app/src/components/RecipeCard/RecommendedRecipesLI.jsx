import axios from "axios";
import RecipeCard from "./RecipeCard";
import { useEffect, useState } from "react";

/*database imports*/
import { db } from "../../firebaseConfig";
import { useAuth } from "../../store/auth-context";
import { ref, child, get, onValue } from "firebase/database";


const RecommendedRecipesLI = () =>{
  {/*the goals have been divided by 3 for each meal of the day*/}
  const dummyData = {
    calorieGoal : 750,
    proteinGoal: 40,
    carbGoal: 88,
    fatGoal: 60
  }
  const apiKey = '2e141398c9fe42e29876fda0a0c27218';

  const [id, setID] = useState();
  const [recipeData, setRecipeData] = useState({});

  useEffect(()=>{
    axios
      .get(`https://api.spoonacular.com/recipes/findByNutrients?apiKey=${apiKey}&minCarbs=${dummyData.carbGoal}
      &minCalories=${dummyData.calorieGoal}&minProtein=${dummyData.proteinGoal}&maxFat=${dummyData.fatGoal}&number=1&random=true`)
      .then((res)=>{
        const curID = res.data[0].id;
        console.log(curID);
        setID(curID);
        return axios.get(
          "https://api.spoonacular.com/recipes/"+curID+"/information?includeNutrition=true&apiKey="+apiKey
        );
      })
      .then((info)=>{
        setRecipeData({
          title: info.data.title,
          img: info.data.image,
          calories: info.data.nutrition.nutrients[0].amount,
          fats: info.data.nutrition.nutrients[1].amount,
          carbs: info.data.nutrition.nutrients[3].amount,
          protein: info.data.nutrition.nutrients[9].amount
        })
      })
      .catch((error=>console.log(error)));
    },[]);

  return(      
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
  )
}

export default RecommendedRecipesLI;