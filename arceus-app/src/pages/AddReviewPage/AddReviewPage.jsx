import React from 'react'
import LeaveReviewCard from '../../components/Review/LeaveReviewCard'
import Navbar from '../../components/Navbar/Navbar'
import { useParams } from 'react-router-dom'
function AddReviewPage() {
    let params = useParams();
    return (
    <div>
        <Navbar/>
        <LeaveReviewCard id={params.recipe} />
    </div>
  );
}

export default AddReviewPage;