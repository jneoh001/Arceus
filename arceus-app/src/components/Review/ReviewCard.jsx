import { db } from "../../firebaseConfig";
import { ref, child, get } from "firebase/database";

const ReviewCard = (props) => {
  //reviewsData -> stores all the reviews of a recipe with id = props.id
  let reviewsData = [];
  const dbRef = ref(db);
  get(child(dbRef, "reviews/" + props.id))
    .then((reviews) => {
      if (reviews.exists()) {
        Object.entries(reviews.val()).forEach(([key, value]) => {
          reviewsData.push(value);
        });
        console.log(reviewsData);
      } else {
        console.log("No reviews data");
      }
    })
    .catch((error) => {
      console.log(error.code);
    });
  return (
    <div>
      <h1>Recipe ID: {props.id}</h1>
    </div>
  );
};

export default ReviewCard;
