import Navbar from "../../components/Navbar/Navbar";
import RecipePage from "../../components/RecipePage/RecipePage";
import { useParams } from "react-router-dom";

const IndividualRecipePage = () => {
  const params = useParams();
  console.log(params.id);
  return (
    <div>
      <Navbar />
      <RecipePage id={params.id} />
    </div>
  );
};

export default IndividualRecipePage;
