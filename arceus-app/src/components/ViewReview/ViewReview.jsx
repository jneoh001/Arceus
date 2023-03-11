import { child } from "firebase/database";
import "./ViewReview.css";

const ViewReview = (props) => {
   

    return (
        <div className="main-layout">

            <div className="reviews-heading">
                <h1>Reviews</h1>
                <span>4 reviews</span>
                <div className="review">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                </div>
            </div>

            <div className="review-box-container">
                <div className="review-box">
                    <div className="box-top">
                        <div className="" profile>
                            <div className="profile-img">
                                <img src="c-1.jpg" alt="" />
                            </div>
                            <div className="name-user">
                                <strong>Abang One</strong>
                            </div>
                        </div>

                        <div className="review">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="far fa-star"></i>
                        </div>
                    </div>

                    <div className="client-comment">
                        <p>Wah the food sibei nice leh</p>
                    </div>
                </div>

                <div className="review-box">
                    <div className="box-top">
                        <div className="" profile>
                            <div className="profile-img">
                                <img src="c-2.png" alt="" />
                            </div>
                            <div className="name-user">
                                <strong>Abang Two</strong>
                            </div>
                        </div>

                        <div className="review">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="far fa-star"></i>
                        </div>
                    </div>

                    <div className="client-comment">
                        <p>Wah the food sibei nice leh</p>
                    </div>
                </div>

                <div className="review-box">
                    <div className="box-top">
                        <div className="" profile>
                            <div className="profile-img">
                                <img src="c-3.jpg" alt="" />
                            </div>
                            <div className="name-user">
                                <strong>Abang Three</strong>
                            </div>
                        </div>

                        <div className="review">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="far fa-star"></i>
                        </div>
                    </div>

                    <div className="client-comment">
                        <p>Wah the food sibei nice leh</p>
                    </div>
                </div>

                <div className="review-box">
                    <div className="box-top">
                        <div className="" profile>
                            <div className="profile-img">
                                <img src="c-4.jpg" alt="" />
                            </div>
                            <div className="name-user">
                                <strong>Abang Four</strong>
                            </div>
                        </div>

                        <div className="review">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="far fa-star"></i>
                        </div>
                    </div>

                    <div className="client-comment">
                        <p>Wah the food sibei nice leh</p>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default ViewReview;
