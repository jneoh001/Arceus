import React from "react";
import LeaveReviewCard from "../../components/Review/LeaveReviewCard";
import Navbar from "../../components/Navbar/Navbar";
import {motion} from "framer-motion"
import { useParams } from "react-router-dom";
function AddReviewPage() {
  let params = useParams();
  return (
    <motion.div
      initial={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity:0}}
    >
      <Navbar />
      <div className="p-16">
        <LeaveReviewCard id={params.id} />
      </div>
    </motion.div>
  );
}

export default AddReviewPage;
