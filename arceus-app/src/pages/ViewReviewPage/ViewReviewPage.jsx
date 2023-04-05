import React from "react";
import ViewReview from "../../components/Review/ViewReview";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import {motion} from 'framer-motion'

function ViewReviewPage() {
  let params = useParams();
  return (
<motion.div
initial={{opacity:0}}
animate={{opacity:1}}
exit={{opacity:0}}
>
  <Navbar />
    <ViewReview id={params.id}/>
</motion.div>

  );
}

export default ViewReviewPage;
