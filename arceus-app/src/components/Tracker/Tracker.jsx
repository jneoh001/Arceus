import { useEffect, useState } from "react";
import Progress from "./Progress";
import { db } from "../../firebaseConfig";
import { useAuth } from "../../store/auth-context";
import { ref, child, get } from "firebase/database";
const Tracker = () => {
  const [profile, setProfile] = useState({
    email: "",
    height: 0,
    weight: 0,
    carbGoal: 0,
    proteinGoal: 0,
    fatGoal: 0,
    calorieGoal: 0,
  });

  const { currentUser } = useAuth();
  const dbRef = ref(db);
  useEffect(() => {
    if (currentUser) {
      get(child(dbRef, "users-profile/" + currentUser.uid + "/details"))
        .then((snapshot) => {
          if (snapshot.exists()) {
            setProfile(snapshot.val());
          } else {
            console.log("No data available");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [currentUser]);
  const goal = 500;
  const [intake, setIntake] = useState(200);

  const addHandler = () => {
    setIntake((pre) => {
      return pre + 10;
    });
  };
  const subtractHandler = () => {
    setIntake((pre) => {
      return pre - 10;
    });
  };

  return (
    <div className="p-4 w-1/2 border-2 border-black bg-white">
      <h1 className="font-bold text-5xl mb-16 mt-4">Daily Goal</h1>
      <Progress
        title="Carbohydrates"
        percentage={
          (intake / profile.carbGoal) * 100 >= 100
            ? "100%"
            : (intake / profile.carbGoal) * 100 + "%"
        }
        className="bg-green-600 dark:bg-green-500"
      />
      <Progress
        title="Protein"
        percentage={
          (intake / profile.proteinGoal) * 100 >= 100
            ? "100%"
            : (intake / profile.proteinGoal) * 100 + "%"
        }
        className="dark:bg-indigo-500 bg-indigo-600"
      />{" "}
      <Progress
        title="Fats"
        percentage={
          (intake / profile.fatGoal) * 100 >= 100
            ? "100%"
            : (intake / profile.fatGoal) * 100 + "%"
        }
        className="bg-yellow-400 dark:bg-yellow-500"
      />
      <Progress
        title="Calories"
        percentage={
          (intake / profile.calorieGoal) * 100 >= 100
            ? "100%"
            : (intake / profile.calorieGoal) * 100 + "%"
        }
        className="bg-red-600 dark:bg-red-500"
      />
      <button
        onClick={addHandler}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        +
      </button>{" "}
      <button
        onClick={subtractHandler}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        -
      </button>
    </div>
  );
};

export default Tracker;
