import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import RecipePage from "../../components/RecipePage/RecipePage";

const IndividualRecipePage = () => {
  const params = useParams();
  return (
    <div>
      <Navbar />
      <RecipePage id={params.id} />
    </div>
  );
};

export default IndividualRecipePage;
