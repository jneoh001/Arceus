import React from "react";
import ViewReview from "../../components/Review/ViewReview";
import { useParams } from "react-router-dom";

function IndividualReviewPage() {
  let params = useParams();
  console.log(process.env)
  console.log(params);
  return (
    <ViewReview id={params.recipe}/>
  );
}

export default IndividualReviewPage;
