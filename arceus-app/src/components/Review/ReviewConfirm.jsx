import { useNavigate } from "react-router-dom";
const ReviewConfirm = (props) => {
  const navigate = useNavigate();

  const returnHandler = () => {
    navigate("/recipe/" + props.id);
  };
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <div className="bg-white p-16 text-2xl rounded-lg shadow-[5px_5px_0px_0px_gray]">
        Thank you for submitting your review.
      </div>
      <button
        type="button"
        onClick={returnHandler}
        className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-lg px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
      >
        Return
      </button>
    </div>
  );
};

export default ReviewConfirm;
