import React from "react";
import RecipeByID from "../../components/RecipeCard/RecipeByID";
import { useParams } from "react-router-dom";

function IndividualRecipePage() {
  let params = useParams();
  console.log(params);
  return (
    <RecipeByID id={params.id}/>
  );
}

export default IndividualRecipePage;
