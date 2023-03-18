import FavouriteButton from "./FavouriteButton";
import { db } from "../../firebaseConfig";
import { get, child, ref } from "firebase/database";
import { useState, useEffect } from "react";

const RecipeCard = (props) => {
  const [rating, setRating] = useState(0);
  const [ratingDisplay, setRatingDisplay] = useState([]);

  useEffect(() => {
    get(child(ref(db), "reviews/" + props.id + "/ratingDetails"))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setRating(Math.round(snapshot.val().total / snapshot.val().number));
        }
      })
      .catch((error) => {
        console.log(error.code);
      });
  }, []);

  useEffect(() => {
    const result = [];
    if (rating === 0) {
      for (let i = 0; i < 5; i++) {
        result.push(
          <span key={i} className="text-3xl">
            &#10032;
          </span>
        );
      }
      result.push(<span key={5}> (No Ratings)</span>);
    } else {
      for (let i = 0; i < rating; i++) {
        result.push(<span key={i}>&#11088;</span>);
      }
    }

    setRatingDisplay(result);
  }, [rating]);

  return (
    <a
      href="#"
      className="flex flex-col w-full max-h-60 items-center bg-gray border border-gray-200 rounded-lg shadow md:flex-row md:max-w-4xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
    >
      <img
        className="object-cover max-h-60 max-w-sm rounded-t-lg h-auto md:h-auto md:w-1/2 md:rounded-none md:rounded-l-lg"
        src={props.img}
        alt={props.name}
      />
      <div className="flex flex-col justify-around py-5 px-5 leading-normal ">
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          {props.name}
        </h5>
        <p className="mb-3 text-xl font-normal text-gray-700 dark:text-gray-400">
          {ratingDisplay}
        </p>
        <p className="mb-2 text-base font-normal text-gray-700 dark:text-gray-400">
          Carbohydrates: {props.carbs}g
        </p>
        <p className="mb-2 text-base font-normal text-gray-700 dark:text-gray-400">
          Protein: {props.protein}g
        </p>
        <p className="mb-2 text-base font-normal text-gray-700 dark:text-gray-400">
          Fats: {props.fats}g
        </p>
        <p className="mb-2 text-base font-normal text-gray-700 dark:text-gray-400">
          Calories: {props.calories}g
        </p>
      </div>{" "}
      {/* <FavouriteButton id={props.id} /> */}
    </a>
  );
};

export default RecipeCard;
