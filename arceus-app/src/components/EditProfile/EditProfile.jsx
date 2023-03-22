import React from "react";
import { useField, Form, Formik } from "formik";
import * as Yup from "yup";
import { useAuth } from "../../store/auth-context";
import { useState, useEffect } from "react";
import { ref, update } from "firebase/database";
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
  const { userDetails, editUserProfile } = useAuth();

  const submitHandler = (e) => {
    const profile = {
      ...userDetails,
      height: e.height,
      weight: e.weight,
      carbGoal: e.carbohydrateGoal,
      proteinGoal: e.proteinGoal,
      fatGoal: e.fatGoal,
      calorieGoal: e.calorieGoal,
    };
    editUserProfile(profile);
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
