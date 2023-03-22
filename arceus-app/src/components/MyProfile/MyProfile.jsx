import { Link } from "react-router-dom";
import { useAuth } from "../../store/auth-context";

const MyProfile = () => {
  const { logout, userDetails } = useAuth();

  return (
    <div className="bg-white flex flex-col w-7/12 justify-center items-center text-lg font-medium border-2 border-black rounded p-4">
      <h1 className="font-bold text-3xl">My Profile</h1>
      <hr className="w-full h-1 mt-4 bg-black rounded" />
      <p className="w-9/12 mt-12">
        {" "}
        Email: <span>{userDetails.email}</span>
      </p>
      <div className="grid grid-cols-2 w-9/12 mt-8">
        <p>
          Height: <span>{userDetails.height} cm</span>
        </p>
        <p>
          Weight: <span>{userDetails.weight} kg</span>
        </p>
      </div>{" "}
      <div className="grid grid-cols-2 w-9/12 mt-8">
        <p>
          Carbohydrate Goal: <span>{userDetails.carbGoal} g</span>
        </p>
        <p>
          Calorie Goal: <span>{userDetails.calorieGoal} g</span>
        </p>
      </div>{" "}
      <div className="grid grid-cols-2 w-9/12 mt-8">
        <p>
          Fat Goal: <span>{userDetails.fatGoal} g</span>
        </p>
        <p>
          Protein Goal: <span>{userDetails.proteinGoal} g</span>
        </p>
      </div>
      <div className="flex justify-between w-2/3">
        <Link to="/editprofile">
          <button className="mt-12 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
            Edit Profile
          </button>
        </Link>
        <button
          onClick={logout}
          type="submit"
          className="mt-12 text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default MyProfile;
