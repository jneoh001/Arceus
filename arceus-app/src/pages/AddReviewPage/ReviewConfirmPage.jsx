import ReviewConfirm from "../../components/Review/ReviewConfirm";
import Navbar from "../../components/Navbar/Navbar";
import { useParams } from "react-router-dom";
const ReviewConfirmPage = () => {
  const params = useParams();
  return (
    <div>
      <Navbar />
      <div className="p-16">
        <ReviewConfirm id={params.id} />
      </div>
    </div>
  );
};

export default ReviewConfirmPage;
