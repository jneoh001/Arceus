import { useEffect, useState } from "react";
import Progress from "./Progress";
import { db } from "../../firebaseConfig";
import { useAuth } from "../../store/auth-context";
import { ref, child, get, update, onValue } from "firebase/database";
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

  const [intake, setIntake] = useState({
    carb: 0,
    protein: 0,
    fat: 0,
    calorie: 0,
  });

  const { currentUser } = useAuth();
  const dbRef = ref(db);

  // Get today's date in the format of DD/MM/YYYY
  const getDate = () => {
    let today = new Date();
    let year = today.getFullYear().toString().slice(-2);
    let month = (today.getMonth() + 1).toString().padStart(2, "0");
    let day = today.getDate().toString().padStart(2, "0");
    let formattedDateID = `${day}-${month}-${year}`;
    let formattedDateDisplay = `${day}/${month}/${year}`;
    return [formattedDateID, formattedDateDisplay];
  };

  //Update database once the intake changes
  useEffect(() => {
    const [todayID, todayDisplay] = getDate();
    if (currentUser) {
      const updates = {};
      updates["/users-profile/" + currentUser.uid + "/history/" + todayID] = {
        date: todayDisplay,
        carbGoal: profile.carbGoal,
        proteinGoal: profile.proteinGoal,
        fatGoal: profile.fatGoal,
        calorieGoal: profile.calorieGoal,
        carbIntake: intake.carb,
        proteinIntake: intake.protein,
        fatIntake: intake.fat,
        calorieIntake: intake.calorie,
      };
      update(ref(db), updates);
    }
  }, [intake, profile]);

  // Get the user's details when the user first log in
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

      const [todayID, todayDisplay] = getDate();
      get(
        child(dbRef, "users-profile/" + currentUser.uid + "/history/" + todayID)
      )
        .then((snapshot) => {
          if (snapshot.exists()) {
            setIntake({
              carb: snapshot.val().carbIntake,
              protein: snapshot.val().proteinIntake,
              fat: snapshot.val().fatIntake,
              calorie: snapshot.val().calorieIntake,
            });
            // console.log(snapshot.val());
            // console.log("History retrieved!");
          }
        })
        .catch((error) => {
          console.log(error.code);
        });

      onValue(
        child(ref(db), "users-profile/" + currentUser.uid + "/details"),
        (snapshot) => {
          setProfile((pre) => {
            return {
              ...profile,
              carbGoal: snapshot.val().carbGoal,
              proteinGoal: snapshot.val().proteinGoal,
              fatGoal: snapshot.val().fatGoal,
              calorieGoal: snapshot.val().calorieGoal,
            };
          });
        }
      );
    }
  }, [currentUser]);

  const addHandler = () => {
    setIntake((pre) => {
      return {
        carb: pre.carb + 10,
        protein: pre.protein + 10,
        fat: pre.fat + 10,
        calorie: pre.calorie + 10,
      };
    });
  };

  const subtractHandler = () => {
    setIntake((pre) => {
      return {
        carb: pre.carb - 10,
        protein: pre.protein - 10,
        fat: pre.fat - 10,
        calorie: pre.calorie - 10,
      };
    });
  };

  return (
    <div className="py-8 px-16 w-2/5 border-r-2 border-black ">
      <h1 className="font-bold text-4xl mb-8">Daily Goal</h1>
      <Progress
        title="Carbohydrates"
        percentage={
          (intake.carb / profile.carbGoal) * 100 >= 100
            ? "100%"
            : (intake.carb / profile.carbGoal) * 100 + "%"
        }
        className="bg-green-600 dark:bg-green-500"
      />
      <Progress
        title="Protein"
        percentage={
          (intake.protein / profile.proteinGoal) * 100 >= 100
            ? "100%"
            : (intake.protein / profile.proteinGoal) * 100 + "%"
        }
        className="dark:bg-indigo-500 bg-indigo-600"
      />{" "}
      <Progress
        title="Fats"
        percentage={
          (intake.fat / profile.fatGoal) * 100 >= 100
            ? "100%"
            : (intake.fat / profile.fatGoal) * 100 + "%"
        }
        className="bg-yellow-400 dark:bg-yellow-500"
      />
      <Progress
        title="Calories"
        percentage={
          (intake.calorie / profile.calorieGoal) * 100 >= 100
            ? "100%"
            : (intake.calorie / profile.calorieGoal) * 100 + "%"
        }
        className="bg-red-600 dark:bg-red-500"
      />
      <div className="flex flex-col justify-center items-center">
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
        <button
          onClick={subtractHandler}
          className="text-center text-white bg-[#24292F] hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center   mr-2 mb-2"
        >
          View History
        </button>
      </div>
    </div>
  );
};

export default Tracker;
