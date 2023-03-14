import FavouriteButton from "./FavouriteButton";

const RecipeCard = (props) => {
  const result = [];
  for (let i = 0; i < props.rating; i++) {
    result.push(<span>⭐</span>);
  }

  return (
    <a
      href="#"
      className="flex flex-col w-full items-center bg-gray border border-gray-200 rounded-lg shadow md:flex-row md:max-w-4xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
    >
      <img
        className="object-cover w-full rounded-t-lg h-auto md:w-1/2 md:rounded-none md:rounded-l-lg"
        src={props.img}
        alt=""
      />
      <div className="flex flex-col justify-between py-4 px-5 leading-normal">
        <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          {props.name}
        </h5>
        <p className="mb-3 text-xl font-normal text-gray-700 dark:text-gray-400">
          {result}
        </p>
        <p className="mb-2 text-lg font-normal text-gray-700 dark:text-gray-400">
          Carbohydrates: {props.carbs}g
        </p>
        <p className="mb-2 text-lg font-normal text-gray-700 dark:text-gray-400">
          Protein: {props.protein}g
        </p>
        <p className="mb-2 text-lg font-normal text-gray-700 dark:text-gray-400">
          Fats: {props.fats}g
        </p>
        <p className="mb-2 text-lg font-normal text-gray-700 dark:text-gray-400">
          Calories: {props.calories}g
        </p>
      </div>{" "}
      {/* <FavouriteButton id={props.id} /> */}
    </a>
  );
};

export default RecipeCard;
