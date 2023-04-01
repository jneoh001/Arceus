import "./LeaveReviewCard.css";
import { ref, push, update, child, get, set, remove } from "firebase/database";
import { db } from "../../firebaseConfig";
import { Form, Alert } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LeaveReviewCard = (props) => {
  const [ratingDetails, setRatingDetails] = useState();
  const [isRetrieved, setIsRetrieved] = useState(false);
  const [topRatedList, setTopRatedList] = useState();
  const [selectedRating, setSelectedRating] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const navigate = useNavigate();

  // Check if the current recipe has reviews
  // if true: retrieve data and store it to ratingDetails; else: set ratingDetails to initial value
  useEffect(() => {
    get(child(ref(db), "reviews/" + props.id + "/ratingDetails"))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setRatingDetails(snapshot.val());
        } else {
          setRatingDetails({
            total: 0,
            number: 0,
          });
          console.log("No ratings found");
        }
      })
      .catch((error) => {
        console.log(error.code);
      });

    // Get the list of current top rated recipes and store the data in topRatedList
    get(child(ref(db), "top-rated")).then((snapshot) => {
      if (snapshot.exists()) {
        const list = Object.values(snapshot.val());
        list.sort((a, b) => {
          return a.rating - b.rating;
        });
        setTopRatedList(list);
      }
    });
  }, []);

  // when ratingDetails is updated, update Database
  useEffect(() => {
    if (isRetrieved) {
      set(ref(db, "reviews/" + props.id + "/ratingDetails"), ratingDetails);

      get(child(ref(db), "top-rated")).then((snapshot) => {
        if (snapshot.exists()) {
          if (
            (Object.keys(snapshot.val()).length < 5 ||
              Object.keys(snapshot.val()).includes(props.id.toString())) &&
            ratingDetails.number !== 0
          ) {
            const updates = {};
            updates["top-rated/" + props.id] = {
              id: props.id,
              rating: ratingDetails.total / ratingDetails.number,
            };
            update(ref(db), updates);
            console.log("data added");
          }

          if (
            ratingDetails.number !== 0 &&
            ratingDetails.total / ratingDetails.number >
              topRatedList[0].rating &&
            !Object.keys(snapshot.val()).includes(props.id.toString()) &&
            Object.keys(snapshot.val()).length >= 5
          ) {
            remove(child(ref(db), "top-rated/" + topRatedList[0].id));
            const updates = {};
            updates["top-rated/" + props.id] = {
              id: props.id,
              rating: ratingDetails.total / ratingDetails.number,
            };
            update(ref(db), updates);
          }
        } else {
          if (ratingDetails.number !== 0) {
            const updates = {};
            updates["top-rated/" + props.id] = {
              id: props.id,
              rating: ratingDetails.total / ratingDetails.number,
            };
            update(ref(db), updates);
          }
        }
      });
    } else {
      setIsRetrieved(true);
    }
  }, [ratingDetails]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (selectedRating === null) {
      setShowAlert(true);
    } else {
      setShowAlert(false);
      setIsAdded(true);
      let rating = 0;
      for (let i = 0; i < 5; i++) {
        if (e.target[i].checked) {
          rating = 5 - i;
        }
      }
      const reviewTitle = e.target[5].value;
      const reviewComment = e.target[6].value;

      const newEntry = {
        title: reviewTitle,
        rating: rating,
        comment: reviewComment,
      };

      setRatingDetails((pre) => {
        return {
          total: pre.total + rating,
          number: pre.number + 1,
        };
      });

      const newPostKey = push(child(ref(db), "reviews")).key;
      const updates = {};
      updates["/reviews/" + props.id + "/data/" + newPostKey] = newEntry;
      update(ref(db), updates);

      setTimeout(() => {
        setIsAdded(false);
        navigate("/recipe/" + props.id);
      }, 2000);
      e.preventDefault();
    }
  };

  const ratingChangeHandler = (e) => {
    setSelectedRating(e.target.value);
  };

  return (
    <div className="flex flex-col items-center">
      {showAlert && (
        <Alert className="w-2/3" variant="danger">
          Please select a rating
        </Alert>
      )}{" "}
      {isAdded && (
        <div
          className="w-2/3 flex p-4 mb-4 text-sm text-green-800 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 dark:border-green-800"
          role="alert"
        >
          <svg
            aria-hidden="true"
            className="flex-shrink-0 inline w-5 h-5 mr-3"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="sr-only">Info</span>
          <div>
            <span className="font-medium"></span> Thank you for the review!
          </div>
        </div>
      )}
      <div className="review-container bg-white border border-black">
        <h2 className="font-bold text-4xl">Leave a review</h2>

        <Form onSubmit={submitHandler}>
          <div className="rating">
            {" "}
            <input
              type="radio"
              name="rating"
              value="5"
              id="5"
              onChange={ratingChangeHandler}
            />
            <label htmlFor="5">☆</label>{" "}
            <input
              type="radio"
              name="rating"
              value="4"
              id="4"
              onChange={ratingChangeHandler}
            />
            <label htmlFor="4">☆</label>{" "}
            <input
              type="radio"
              name="rating"
              value="3"
              id="3"
              onChange={ratingChangeHandler}
            />
            <label htmlFor="3">☆</label>{" "}
            <input
              type="radio"
              name="rating"
              value="2"
              id="2"
              onChange={ratingChangeHandler}
            />
            <label htmlFor="2">☆</label>{" "}
            <input
              type="radio"
              name="rating"
              value="1"
              id="1"
              onChange={ratingChangeHandler}
            />
            <label htmlFor="1">☆</label>
          </div>
          <Form.Control
            className="review-input"
            size="lg"
            type="text"
            placeholder="Review Title"
            required
          />
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control
              as="textarea"
              rows={8}
              placeholder="Leave a comments (optional)"
              className="review-input"
            />
          </Form.Group>
          <div className="d-grid">
            <button
              type="submit"
              className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              Submit
            </button>
          </div>
        </Form>
      </div>{" "}
    </div>
  );
};

export default LeaveReviewCard;
