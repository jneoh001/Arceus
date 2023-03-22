import { useParams } from "react-router-dom";
import Navbar from  "../../components/Navbar/Navbar";
import RecipePage from "../../components/RecipePage/RecipePage";

const IndividualRecipePage = () => {
    let params = useParams();
    console.log(params);
    return (
        <div>
            <Navbar />
            <RecipePage recipeid={params.id}/>
        </div>
    );
};

export default IndividualRecipePage;