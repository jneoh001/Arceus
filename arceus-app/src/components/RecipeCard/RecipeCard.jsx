import FavouriteButton from "./FavouriteButton";

const RecipeCard = (props) => {
  const result = [];
  for (let i = 0; i < props.rating; i++) {
    result.push(<span>⭐</span>);
  }

  return (
    <a
      href="#"
      className="flex flex-col w-full max-h-60 items-center bg-gray border border-gray-200 rounded-lg shadow md:flex-row md:max-w-4xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
    >
      <img
        className="object-cover max-h-60 max-w-sm rounded-t-lg h-auto md:h-auto md:w-1/2 md:rounded-none md:rounded-l-lg"
        src={props.img}
        alt=""
      />
      <div className="flex flex-col justify-around py-5 px-5 leading-normal ">
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          {props.name}
        </h5>
        <p className="mb-3 text-xl font-normal text-gray-700 dark:text-gray-400">
          {result}
        </p>
        <p className="mb-2 text-base font-normal text-gray-700 dark:text-gray-400">
          Carbohydrates: {props.carbs}
        </p>
        <p className="mb-2 text-base font-normal text-gray-700 dark:text-gray-400">
          Protein: {props.protein}
        </p>
        <p className="mb-2 text-base font-normal text-gray-700 dark:text-gray-400">
          Fats: {props.fats}
        </p>
        <p className="mb-2 text-base font-normal text-gray-700 dark:text-gray-400">
          Calories: {props.calories}
        </p>
      </div>{" "}
    </a>
  );
};

export default RecipeCard;
