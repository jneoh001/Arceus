import React from "react";
import { useParams } from "react-router-dom";
import LeaveReviewCard from "../../components/Review/LeaveReviewCard";
import Navbar from "../../components/Navbar/Navbar";

function AddReviewPage() {
  let params = useParams();
  console.log(params);
  return (
    <div>
      <Navbar /><LeaveReviewCard id={params.id}/>
    </div>
    
  );
}

export default AddReviewPage;
