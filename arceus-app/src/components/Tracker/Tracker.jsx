import { useEffect } from "react";
import Progress from "./Progress";
import { db } from "../../firebaseConfig";
import { useAuth } from "../../store/auth-context";
import { ref, update } from "firebase/database";
import getDate from "../../helpers/getDate";

const Tracker = () => {
  const { userIntake, userDetails, currentUser } = useAuth();

  //Update database once the intake changes
  useEffect(() => {
    const [todayID, todayDisplay] = getDate();
    if (userDetails && userIntake) {
      const updates = {};
      updates["/users-profile/" + currentUser.uid + "/history/" + todayID] = {
        date: todayDisplay,
        carbGoal: userDetails.carbGoal,
        proteinGoal: userDetails.proteinGoal,
        fatGoal: userDetails.fatGoal,
        calorieGoal: userDetails.calorieGoal,
        carbIntake: userIntake.carb,
        proteinIntake: userIntake.protein,
        fatIntake: userIntake.fat,
        calorieIntake: userIntake.calorie,
      };
      update(ref(db), updates);
    }
  }, [userIntake, userDetails]);

  return (
    <div className="py-8 px-16 w-2/5 border-r-2 border-black ">
      <h1 className="font-bold text-4xl mb-8">Daily Goal</h1>
      <Progress
        title="Carbohydrates"
        percentage={
          userIntake
            ? (userIntake.carb / userDetails.carbGoal) * 100 >= 100
              ? "100%"
              : (userIntake.carb / userDetails.carbGoal) * 100 + "%"
            : "0%"
        }
        className="bg-green-600 dark:bg-green-500"
      />
      <Progress
        title="Protein"
        percentage={
          userIntake
            ? (userIntake.protein / userDetails.proteinGoal) * 100 >= 100
              ? "100%"
              : (userIntake.protein / userDetails.proteinGoal) * 100 + "%"
            : "0%"
        }
        className="dark:bg-indigo-500 bg-indigo-600"
      />{" "}
      <Progress
        title="Fats"
        percentage={
          userIntake
            ? (userIntake.fat / userDetails.fatGoal) * 100 >= 100
              ? "100%"
              : (userIntake.fat / userDetails.fatGoal) * 100 + "%"
            : "0%"
        }
        className="bg-yellow-400 dark:bg-yellow-500"
      />
      <Progress
        title="Calories"
        percentage={
          userIntake
            ? (userIntake.calorie / userDetails.calorieGoal) * 100 >= 100
              ? "100%"
              : (userIntake.calorie / userDetails.calorieGoal) * 100 + "%"
            : "0%"
        }
        className="bg-red-600 dark:bg-red-500"
      />
      <div className="flex flex-col justify-center items-center">
        <button
          onClick={() => {
            console.log("Hello");
          }}
          className="text-center text-white bg-[#24292F] hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center   mr-2 mb-2"
        >
          View History
        </button>
      </div>
    </div>
  );
};

export default Tracker;
