import React from "react";
import ViewReview from "../../components/Review/ViewReview";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

function ViewReviewPage() {
  let params = useParams();
  return (
<div>
  <Navbar />
    <ViewReview id={params.id}/>
</div>

  );
}

export default ViewReviewPage;
