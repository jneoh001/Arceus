import React from "react";
import { useField, Form, Formik } from "formik";
import * as Yup from "yup";
import { useAuth } from "../../store/auth-context";
import { useState, useEffect } from "react";
import { get, child, ref, update } from "firebase/database";
import { db } from "../../firebaseConfig";

const MyNumberInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="number-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const EditProfile = () => {
  const { currentUser } = useAuth();
  const [profile, setProfile] = useState({
    email: "",
    fname: "",
    lname: "",
    activityLevel: "",
    weight: 0,
    height: 0,
    carbGoal: 0,
    proteinGoal: 0,
    fatGoal: 0,
    calorieGoal: 0,
  });

  const [history, setHistory] = useState({
    date: "",
    carbGoal: 0,
    proteinGoal: 0,
    fatGoal: 0,
    calorieGoal: 0,
    carbIntake: 0,
    proteinIntake: 0,
    fatIntake: 0,
    calorieIntake: 0,
  });

  const getDate = () => {
    let today = new Date();
    let year = today.getFullYear().toString().slice(-2);
    let month = (today.getMonth() + 1).toString().padStart(2, "0");
    let day = today.getDate().toString().padStart(2, "0");
    let formattedDateID = `${day}-${month}-${year}`;
    let formattedDateDisplay = `${day}/${month}/${year}`;
    return [formattedDateID, formattedDateDisplay];
  };

  useEffect(() => {
    const [todayID, todayDisplay] = getDate();

    if (currentUser) {
      get(child(ref(db), "users-profile/" + currentUser.uid + "/details"))
        .then((snapshot) => {
          if (snapshot.exists()) {
            setProfile(snapshot.val());
          }
        })
        .catch((error) => {
          console.log(error.code);
        });

      get(
        child(
          ref(db),
          "users-profile/" + currentUser.uid + "/history/" + todayID
        )
      )
        .then((snapshot) => {
          if (snapshot.exists()) {
            setHistory(snapshot.val());
          }
        })
        .catch((error) => {
          console.log(error.code);
        });
    }
  }, [currentUser]);

  useEffect(() => {
    if (currentUser) {
      const updates = {};
      updates["/users-profile/" + currentUser.uid + "/details"] = profile;
      update(ref(db), updates);

      const [todayID, todayDisplay] = getDate();
      const updates2 = {};
      updates2["/users-profile/" + currentUser.uid + "/history/" + todayID] = {
        ...history,
        date: todayDisplay,
        carbGoal: profile.carbGoal,
        proteinGoal: profile.proteinGoal,
        fatGoal: profile.fatGoal,
        calorieGoal: profile.calorieGoal,
      };
      update(ref(db), updates2);
    }
  }, [profile]);

  const submitHandler = (e) => {
    setProfile((pre) => {
      return {
        ...pre,
        height: e.height,
        weight: e.weight,
        carbGoal: e.carbohydrateGoal,
        proteinGoal: e.proteinGoal,
        fatGoal: e.fatGoal,
        calorieGoal: e.calorieGoal,
      };
    });
  };

  return (
    <div className="flex flex-col justify-center items-center border-black border-2 w-9/12 font-semibold text-lg bg-gray-800 text-white">
      <h1 className="font-bold text-3xl p-12">Edit Profile</h1>
      <Formik
        initialValues={{
          weight: 0,
          height: 0,
          carbohydrateGoal: 0,
          fatGoal: 0,
          proteinGoal: 0,
          calorieGoal: 0,
        }}
        validationSchema={Yup.object({
          weight: Yup.number().min(0, "Weight must be greater than 1kg."),
          height: Yup.number().min(0, "Height must be greater than 0cm"),
          carbohydrateGoal: Yup.number().min(
            0,
            "Carbohydrate Goal must be greater than 0g"
          ),
          fatGoal: Yup.number().min(0, "Fat Goal must be greater than 0g"),
          proteinGoal: Yup.number().min(
            0,
            "Protein Goal must be greater than 0g"
          ),
        })}
        onSubmit={submitHandler}
      >
        <Form className="">
          <div className="grid grid-cols-2">
            <div className="">
              <MyNumberInput
                className="border-2 border-black p-2 w-11/12 my-2 font-normal text-black"
                label="Weight"
                name="weight"
                type="number"
              />
            </div>
            <div className="">
              <MyNumberInput
                className="border-2 border-black p-2 w-full my-2 font-normal text-black"
                label="Height"
                name="height"
                type="number"
              />
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="">
              <MyNumberInput
                className="border-2 border-black p-2 w-11/12 my-2 font-normal text-black"
                label="Carbohydrate Goal"
                name="carbohydrateGoal"
                type="number"
              />
            </div>
            <div className="">
              <MyNumberInput
                className="border-2 border-black p-2 w-full my-2 font-normal text-black"
                label="Calorie Goal"
                name="calorieGoal"
                type="number"
              />
            </div>{" "}
          </div>

          <div className="grid grid-cols-2">
            <div className="">
              <MyNumberInput
                className="border-2 border-black p-2 w-11/12 my-2 font-normal text-black"
                label="Fat Goal"
                name="fatGoal"
                type="number"
              />
            </div>
            <div className="">
              <MyNumberInput
                className="border-2 border-black p-2 w-full my-2 font-normal text-black"
                label="Protein Goal"
                name="proteinGoal"
                type="number"
              />
            </div>
          </div>

          <button
            className="my-4 py-2.5 cursor-pointer text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-md text-center w-full"
            type="submit"
          >
            Update Profile
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default EditProfile;
