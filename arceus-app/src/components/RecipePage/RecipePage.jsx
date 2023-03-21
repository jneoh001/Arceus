import React, { useEffect, useState } from "react";
import axios from "axios";
import "./RecipePage.css";
import RecipeFavourite from "./RecipeFavourite";
import { db } from "../../firebaseConfig";
import { useAuth } from "../../store/auth-context";
import { ref, child, get, update } from "firebase/database";

export default function RecipePage() {
  const { currentUser, userDetails } = useAuth();
  const apiKey = "7f8b79cf24094b52953b2d594e02f04e ";
  const [recipeData, setRecipeData] = useState({});
  const [ingredientWidget, setIngredientWidget] = useState();

  const [intake, setIntake] = useState({
    carb: 0,
    protein: 0,
    fat: 0,
    calorie: 0,
  });

  // Get today's date in the format of DD/MM/YYYY
  const getDate = () => {
    let today = new Date();
    let year = today.getFullYear().toString().slice(-2);
    let month = (today.getMonth() + 1).toString().padStart(2, "0");
    let day = today.getDate().toString().padStart(2, "0");
    let formattedDateID = `${day}-${month}-${year}`;
    let formattedDateDisplay = `${day}/${month}/${year}`;
    return [formattedDateID, formattedDateDisplay];
  };

  //Update database once the intake changes
  useEffect(() => {
    const [todayID, todayDisplay] = getDate();
    if (userDetails) {
      const updates = {};
      updates["/users-profile/" + currentUser.uid + "/history/" + todayID] = {
        date: todayDisplay,
        carbGoal: userDetails.carbGoal,
        proteinGoal: userDetails.proteinGoal,
        fatGoal: userDetails.fatGoal,
        calorieGoal: userDetails.calorieGoal,
        carbIntake: intake.carb,
        proteinIntake: intake.protein,
        fatIntake: intake.fat,
        calorieIntake: intake.calorie,
      };
      update(ref(db), updates);
      console.log(userDetails);
    }
  }, [intake]);

  // Get the user's details when the user first log in
  useEffect(() => {
    if (currentUser) {
      const [todayID, todayDisplay] = getDate();
      get(
        child(
          ref(db),
          "users-profile/" + currentUser.uid + "/history/" + todayID
        )
      )
        .then((snapshot) => {
          if (snapshot.exists()) {
            setIntake({
              carb: snapshot.val().carbIntake,
              protein: snapshot.val().proteinIntake,
              fat: snapshot.val().fatIntake,
              calorie: snapshot.val().calorieIntake,
            });
            // console.log(snapshot.val());
            // console.log("History retrieved!");
          }
        })
        .catch((error) => {
          console.log(error.code);
        });
    }
  }, [currentUser]);

  const addHandler = () => {
    setIntake((pre) => {
      return {
        carb: pre.carb + recipeData.recipeCarbs,
        protein: pre.protein + recipeData.recipeProtein,
        fat: pre.fat + recipeData.recipeFat,
        calorie: pre.calorie + recipeData.recipeCalorie,
      };
    });
  };

  const subtractHandler = () => {
    setIntake((pre) => {
      return {
        carb: pre.carb - 10,
        protein: pre.protein - 10,
        fat: pre.fat - 10,
        calorie: pre.calorie - 10,
      };
    });
  };

  useEffect(() => {
    axios
      .get(
        "https://api.spoonacular.com/recipes/10123/information?apiKey=" + apiKey
      )
      // .then(response => {
      //     //console.log(response)
      //     setRecipeData({img: response.data.img})
      //     console.log(recipeData)

      // })
      .then((response) => {
        setRecipeData({
          img: response.data.image,
          instructions: response.data.instructions,
          // title: response.data.title,
        });
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    axios
      .get("https://api.spoonacular.com/food/menuitems/10123?apiKey=" + apiKey)
      // .then(response => {
      //     //console.log(response)
      //     setRecipeData({img: response.data.img})
      //     console.log(recipeData)

      // })
      .then((response) => {
        setRecipeData({
          recipeCarbs: response.nutrition.nutrients[1].amount,
          recipeProtein: response.nutrition.nutrients[7].amount,
          recipeFat: response.nutrition.nutrients[3].amount,
          recipeCalorie: response.nutrition.nutrients[2].amount,
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
      <div className="recipe-page-container-grid w-5/6 grid gap-0 grid-cols-2 ml-16">
        {/*Picture 1st Item */}
        <div className="ml-20 mt-16">
          {/* <h2 class=" text-3xl"
                    id = "recipePageHeader"
                    > {recipeData.title}</h2> */}

          <img className="recipeImage rounded-lg" src={recipeData.img} />
        </div>

        {/* <p id="stars">{result}</p> */}

        <div className="iconsdiv flex items-center ">
          <svg
            aria-hidden="true"
            className="w-10 h-10 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>First star</title>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <svg
            aria-hidden="true"
            className="w-10 h-10 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Second star</title>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <svg
            aria-hidden="true"
            className="w-10 h-10 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Third star</title>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <svg
            aria-hidden="true"
            className="w-10 h-10 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Fourth star</title>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <svg
            aria-hidden="true"
            className="w-10 h-10 text-gray-300"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Fifth star</title>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>

          <div className="ml-auto">
            <RecipeFavourite />
          </div>
        </div>

        {/*Preparation Portion */}
        <div className="preparation-container">
          <h2 className=" text-center text-3xl mb-2 mt-2" id="recipePageHeader">
            Preparation
          </h2>
          <hr />

          <p
            className="recipeInstructions text-center mt-2 text-2xl"
            dangerouslySetInnerHTML={{ __html: recipeData.instructions }}
          ></p>
        </div>

        {/*Add Review Button ( Routed to Reviews) & Add To Tracker */}

        <div className="buttonsContainer ml-20 justify-self-center">
          <button
            type="button"
            onClick={addHandler}
            className="AddReviewButton text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            Add Review
          </button>

          <button
            type="button"
            className="AddTrackerButton text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            Add To Tracker
          </button>
        </div>

        {/*Ingredients Portion */}
        <div>
          <h2 className="text-center text-3xl mb-2 mt-20" id="recipePageHeader">
            Ingredients
          </h2>

          <hr className=" " />

          <img className="m-auto" src={ingredientWidget} />
        </div>

        <img className="m-auto" src={ingredientWidget} />
      </div>
    </div>
  );
}
