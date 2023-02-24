import "./RecipeCard.css";
const RecipeCard = (props) => {
  const result = [];
  for (let i = 0; i < props.rating; i++) {
    result.push(<span>⭐</span>);
  }
  return (
    <div className="recipe-card-container">
      <div className="recipe-nutrients">
        <h1>{props.name}</h1>
        <p>{result}</p>
        <p>
          Carbohydrates: <span>{props.carbs}g</span>
        </p>
        <p>
          Protein: <span>{props.protein}g</span>
        </p>
        <p>
          Fats: <span>{props.fats}g</span>
        </p>
      </div>
      <img className="recipe-image" src={props.img}></img>
    </div>
  );
};

export default RecipeCard;
