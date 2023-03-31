import React from "react";
import LeaveReviewCard from "../../components/Review/LeaveReviewCard";
import Navbar from "../../components/Navbar/Navbar";
import { useParams } from "react-router-dom";
function AddReviewPage() {
  let params = useParams();
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
