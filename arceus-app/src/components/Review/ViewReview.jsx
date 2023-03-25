import "./ViewReview.css";
import { db } from "../../firebaseConfig";
import { ref, child, get, onValue } from "firebase/database";
import { useState, useEffect } from "react";

const ViewReview = (props) => {
  const [reviewsData, setReviewsData] = useState([]);
  useEffect(() => {
    get(child(ref(db), "reviews/" + props.id + "/data"))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setReviewsData(Object.values(snapshot.val()));
        } else {
          console.log("No reviews data");
        }
      })
      .catch((error) => {
        console.log(error.code);
      });

    onValue(child(ref(db), "reviews/" + props.id), (snapshot) => {
      setReviewsData(Object.values(snapshot.val()));
    });
  }, []);

  return (
    <div className="main-layout">
      <div className="reviews-heading">
        <h1>Reviews</h1>
        <span className="mt-4">{reviewsData.length} reviews</span>
      </div>
      <div className="review-box-container">
        {reviewsData.map((review, index) => {
          let result = [];
          for (let i = 0; i < review.rating; i++) {
            result.push(<span key={i}>⭐</span>);
          }
          return (
            <div className="review-box" key={index}>
              <div className="box-top">
                <div className="" profile="true">
                  <div className="profile-img">
                    <img src="c-1.jpg" alt="" />
                  </div>
                  <div className="name-user">
                    <strong>Anonymous User {index + 1}</strong>
                  </div>
                </div>

                <div className="review">{result}</div>
              </div>

              <div className="client-comment">
                <p>
                  {review.title} {review.comment && "-"} {review.comment}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ViewReview;
