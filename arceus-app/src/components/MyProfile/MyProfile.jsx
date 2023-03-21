import { ref, child, get, onValue } from "firebase/database";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../../firebaseConfig";
import { useAuth } from "../../store/auth-context";

const MyProfile = () => {
  const [profile, setProfile] = useState({
    email: "",
    height: 0,
    weight: 0,
    carbGoal: 0,
    proteinGoal: 0,
    fatGoal: 0,
    calorieGoal: 0,
  });
  
  const { currentUser, logout } = useAuth();
  const dbRef = ref(db);
  useEffect(() => {
    if (currentUser) {
      get(child(dbRef, "users-profile/" + currentUser.uid + "/details"))
        .then((snapshot) => {
          if (snapshot.exists()) {
            setProfile(snapshot.val());
            // console.log(snapshot.val());
          } else {
            console.log("No data available");
          }
        })
        .catch((error) => {
          console.error(error);
        });

      onValue(
        child(ref(db), "users-profile/" + currentUser.uid + "/details"),
        (snapshot) => {
          setProfile(snapshot.val());
        }
      );
    }
  }, [currentUser]);

  return (
    <div className="bg-white flex flex-col w-7/12 justify-center items-center text-lg font-medium border-2 border-black rounded p-4">
      <h1 className="font-bold text-3xl">My Profile</h1>
      <hr className="w-full h-1 mt-4 bg-black rounded" />
      <p className="w-9/12 mt-12">
        {" "}
        Email: <span>{profile.email}</span>
      </p>
      <div className="grid grid-cols-2 w-9/12 mt-8">
        <p>
          Height: <span>{profile.height} cm</span>
        </p>
        <p>
          Weight: <span>{profile.weight} kg</span>
        </p>
      </div>{" "}
      <div className="grid grid-cols-2 w-9/12 mt-8">
        <p>
          Carbohydrate Goal: <span>{profile.carbGoal} g</span>
        </p>
        <p>
          Calorie Goal: <span>{profile.calorieGoal} g</span>
        </p>
      </div>{" "}
      <div className="grid grid-cols-2 w-9/12 mt-8">
        <p>
          Fat Goal: <span>{profile.fatGoal} g</span>
        </p>
        <p>
          Protein Goal: <span>{profile.proteinGoal} g</span>
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
