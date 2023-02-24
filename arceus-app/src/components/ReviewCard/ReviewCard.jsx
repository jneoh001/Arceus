import "./ReviewCard.css";
import { Form, Button } from "react-bootstrap";

const ReviewCard = () => {
  const submitHandler = (e) => {
    let rating = 0;
    for (let i = 0; i < 5; i++) {
      if (e.target[i].checked) {
        rating = i + 1;
      }
    }
    const reviewTitle = e.target[5].value;
    const reviewComment = e.target[6].value;
    console.log("Rating:", rating);
    console.log("Review Title:", reviewTitle);
    console.log("Review Comment:", reviewComment);
    e.preventDefault();
  };

  return (
    <div className="review-container">
      <h2>
        <b>Leave a review</b>
      </h2>

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
        />
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control
            as="textarea"
            rows={5}
            placeholder="Leave a comments (optional)"
            className="review-input"
          />
        </Form.Group>
        <div className="d-grid">
          <Button size="lg" variant="secondary" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default ReviewCard;
