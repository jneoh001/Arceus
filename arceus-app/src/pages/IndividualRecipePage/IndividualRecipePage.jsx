import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import RecipePage from "../../components/RecipePage/RecipePage";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";

function RerouteHandler() {
  const location = useLocation();
  const [isShowing, setIsShowing] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [messageStyle, setMessageStyle] = useState("");
  const successClassName =
    "bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative";

  useEffect(() => {
    const error = location.state?.message;
    if (error) {
      setErrorMessage(error);
      setMessageStyle(successClassName);
      setIsShowing(true);
      setTimeout(() => {
        setIsShowing(false);
      }, 5000);
    }
  }, [location.state]);
  return (
    <div>
      <CSSTransition
        in={isShowing}
        timeout={{
          enter: 300,
          exit: 300,
        }}
        classNames="fade"
        unmountOnExit
      >
        <div className={messageStyle}>
          <p>{errorMessage}</p>
        </div>
      </CSSTransition>
    </div>
  );
}

const IndividualRecipePage = () => {
  const params = useParams();
  return (
    <div>
      <Navbar />
      <RerouteHandler/>
      <RecipePage id={params.id} />
    </div>
  );
};

export default IndividualRecipePage;
