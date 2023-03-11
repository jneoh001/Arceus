import "./LeaveReviewCard.css";
import { ref, push, update, child } from "firebase/database";
import { db } from "../../firebaseConfig";
import { Form } from "react-bootstrap";

const LeaveReviewCard = (props) => {
  const submitHandler = (e) => {
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
    const endpt = "reviews";
    const newPostKey = push(child(ref(db), endpt)).key;

    const updates = {};
    updates["/" + endpt + "/" + props.id + "/" + newPostKey] = newEntry;
    update(ref(db), updates);
    e.preventDefault();
  };

  return (
    <div className="review-container bg-white border border-black">
      <h2 className="font-bold text-4xl">Leave a review</h2>

      <Form onSubmit={submitHandler}>
        <div className="rating">
          {" "}
          <input type="radio" name="rating" value="5" id="5" />
          <label htmlFor="5">☆</label>{" "}
          <input type="radio" name="rating" value="4" id="4" />
          <label htmlFor="4">☆</label>{" "}
          <input type="radio" name="rating" value="3" id="3" />
          <label htmlFor="3">☆</label>{" "}
          <input type="radio" name="rating" value="2" id="2" />
          <label htmlFor="2">☆</label>{" "}
          <input type="radio" name="rating" value="1" id="1" />
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
    </div>
  );
};

export default LeaveReviewCard;
