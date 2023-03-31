import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Progress from "./Progress";
import { db } from "../../firebaseConfig";
import { useAuth } from "../../store/auth-context";
import { ref, update } from "firebase/database";
import getDate from "../../helpers/getDate";

const Tracker = () => {
  const { userIntake, userDetails, currentUser } = useAuth();
  const navigate = useNavigate();

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
              : Math.round((userIntake.carb / userDetails.carbGoal) * 100) + "%"
            : "0%"
        }
        className="from-emerald-500 to-lime-600"
      />
      <Progress
        title="Protein"
        percentage={
          userIntake
            ? (userIntake.protein / userDetails.proteinGoal) * 100 >= 100
              ? "100%"
              : Math.round(
                  (userIntake.protein / userDetails.proteinGoal) * 100
                ) + "%"
            : "0%"
        }
        className="from-sky-400 to-blue-500"
      />{" "}
      <Progress
        title="Fats"
        percentage={
          userIntake
            ? (userIntake.fat / userDetails.fatGoal) * 100 >= 100
              ? "100%"
              : Math.round((userIntake.fat / userDetails.fatGoal) * 100) + "%"
            : "0%"
        }
        className="from-yellow-200 via-yellow-300 to-yellow-400"
      />
      <Progress
        title="Calories"
        percentage={
          userIntake
            ? (userIntake.calorie / userDetails.calorieGoal) * 100 >= 100
              ? "100%"
              : Math.round(
                  (userIntake.calorie / userDetails.calorieGoal) * 100
                ) + "%"
            : "0%"
        }
        className="from-rose-500 via-red-400 to-red-500"
      />
      <Link to="/history" className="flex flex-col items-center">
        <button
          onClick={() => {
            navigate("/history");
          }}
          className="text-center text-white bg-[#24292F] hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center absolute mt-8"
        >
          View History
        </button>
      </Link>
    </div>
  );
};

export default Tracker;
