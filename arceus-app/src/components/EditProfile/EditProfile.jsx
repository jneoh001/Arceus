import React, { useState } from "react";
import { useField, Form, Formik } from "formik";
import * as Yup from "yup";
import { useAuth } from "../../store/auth-context";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const [isAdded, setIsAdded] = useState(false);
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

    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
      navigate("/profile");
    }, 1000);
  };

  return (
    <div className="flex flex-col items-center">
      {isAdded && (
        <div
          className="w-2/3 flex p-4 mb-4 text-sm text-green-800 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 dark:border-green-800"
          role="alert"
        >
          <svg
            aria-hidden="true"
            className="flex-shrink-0 inline w-5 h-5 mr-3"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="sr-only">Info</span>
          <div>
            <span className="font-medium"></span> Your profile is updated!
          </div>
        </div>
      )}
      <div className="flex flex-col justify-center mx-auto mb-4 w-auto items-center border-grey border-2 rounded-lg w-1/2 font-semibold text-lg bg-white text-black">
        <h1 className="font-bold text-3xl p-12">Edit Profile</h1>
        <Formik
          initialValues={{
            weight: userDetails.weight,
            height: userDetails.height,
            carbohydrateGoal: userDetails.carbGoal,
            fatGoal: userDetails.fatGoal,
            proteinGoal: userDetails.proteinGoal,
            calorieGoal: userDetails.calorieGoal,
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
          <Form className="m-5">
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
      </div>{" "}
    </div>
  );
};

export default EditProfile;
