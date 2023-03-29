import React from "react";
import { useParams } from "react-router-dom";
import LeaveReviewCard from "../../components/Review/LeaveReviewCard";
import Navbar from "../../components/Navbar/Navbar";

function AddReviewPage() {
  let params = useParams();
  console.log(params);
  return (
    <div>
      <Navbar />
      <div className="p-16">
        <LeaveReviewCard id={params.id} />
      </div>
    </div>
  );
}

export default AddReviewPage;
