import React from "react";
import * as Yup from "yup";
import { Form, useField, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../store/auth-context";

const MyNumberInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-red-500	" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="text-red-500">{meta.error}</div>
      ) : null}
    </>
  );
};

const MyTextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-red-500	" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="text-red-500	">{meta.error}</div>
      ) : null}
    </>
  );
};

const MySelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="text-red-500	">{meta.error}</div>
      ) : null}
    </div>
  );
};

const initialValues = {
  email: "johndoe@arceus.com",
  password: "password",
  firstName: "John",
  lastName: "Doe",
  activityLevel: "",
  weight: 1,
  height: 1,
  carbohydrateGoal: 1,
  calorieGoal: 1,
  fatGoal: 1,
  proteinGoal: 1,
};

const validationSchema = Yup.object({
  email: Yup.string().email("*Invalid Email Address").required("*Required"),
  password: Yup.string()
    .required("*Required")
    .min(8, "*Password must be minimum 8 characters")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "*Include at least one Uppercase, Lowercase, Number and a Special Character"
    ),
  firstName: Yup.string().required("*Required"),
  lastName: Yup.string().required("*Required"),
  activityLevel: Yup.string().required("*Required"),
  weight: Yup.number()
    .min(1, "*Weight must be greater than 0kg")
    .required("*Required"),
  height: Yup.number()
    .min(1, "*Height must be greater than 0cm")
    .required("*Required"),
  carbohydrateGoal: Yup.number()
    .min(1, "*Carbohydrate Goal must be greater than 0g")
    .required("*Required"),
  calorieGoal: Yup.number()
    .min(1, "*Calorie Goal must be greater than 0kcal")
    .required("*Required"),
  fatGoal: Yup.number()
    .min(1, "*Fat Goal must be greater than 0g")
    .required("*Required"),
  proteinGoal: Yup.number()
    .min(1, "*Protein Goal must be greater than 0g")
    .required("*Required"),
});

const RegistrationCard = () => {
  const { signup, emailInUse } = useAuth();
  const navigate = useNavigate();
  const submitHandler = (values) => {
    const profile = {
      email: values.email,
      fname: values.firstName,
      lname: values.lastName,
      activityLevel: values.activityLevel,
      weight: values.weight,
      height: values.height,
      carbGoal: values.carbohydrateGoal,
      proteinGoal: values.proteinGoal,
      fatGoal: values.fatGoal,
      calorieGoal: values.calorieGoal,
    };
    signup(values.email, values.password, profile);
    
    navigate("/login",{
      state:{
        message: "Registration Succesful! Please Login."
      }
    })
  };
  return (
    <div className="flex flex-col justify-center items-center pl-20 pr-20 font-semibold bg-white text-lg text-black">
      <h1 className="font-bold text-4xl p-12">Register an account</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={submitHandler}
      >
        <Form>
          <div className="">
            <div className="">
              <MyTextInput
                className="border-black border-2 w-full p-2 my-2 font-normal text-black"
                label="Email Address"
                name="email"
                type="email"
                placeholder="Email Address"
              />
              {emailInUse && (
                <p className="text-red-500">*Email is already in use</p>
              )}
            </div>
            <div className="">
              <MyTextInput
                label="Password"
                className="border-black border-2 w-full p-2 my-2 font-normal text-black"
                name="password"
                type="password"
                placeholder="Password"
              />
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div>
              <MyTextInput
                label="First Name"
                className="border-2 border-black p-2 w-11/12 my-2 font-normal text-black"
                name="firstName"
                type="text"
                placeholder="First Name"
              />
            </div>
            <div className="">
              <MyTextInput
                label="Last Name"
                className="border-2 border-black p-2 w-full my-2 font-normal text-black"
                name="lastName"
                type="text"
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className="">
            <MySelect
              label="Activity Level"
              className="border-black border-2 w-full p-2 my-2 font-normal text-black"
              name="activityLevel"
            >
              <option value="">Select an Activity Level</option>
              <option value="sedentary">Sedentary</option>
              <option value="lightlyActive">Lightly Active</option>
              <option value="moderatelyActive">Moderately Active</option>
              <option value="veryActive">Very Active</option>
            </MySelect>
          </div>
          <div className="grid grid-cols-2">
            <div className="">
              <MyNumberInput
                className="border-2 border-black p-2 w-11/12 my-2 font-normal text-black"
                label="Weight (kg)"
                name="weight"
                type="number"
                placeholder="Weight"
              />
            </div>
            <div className="">
              <MyNumberInput
                className="border-2 border-black p-2 w-full my-2 font-normal text-black"
                label="Height (cm)"
                name="height"
                type="number"
                placeholder="Height"
              />
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="">
              <MyNumberInput
                className="border-2 border-black p-2 w-11/12 my-2 font-normal text-black"
                label="Carbohydrate Goal (g)"
                name="carbohydrateGoal"
                type="number"
                placeholder="Carbohydrate Goal"
              />
            </div>
            <div className="">
              <MyNumberInput
                className="border-2 border-black p-2 w-full my-2 font-normal text-black"
                label="Calorie Goal (g)"
                name="calorieGoal"
                type="number"
                placeholder="Calorie Goal"
              />
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="">
              <MyNumberInput
                className="border-2 border-black p-2 w-11/12 my-2 font-normal text-black"
                label="Fat Goal (g)"
                name="fatGoal"
                type="number"
                placeholder="Fat Goal"
              />
            </div>
            <div className="">
              <MyNumberInput
                className="border-2 border-black p-2 w-full my-2 font-normal text-black"
                label="Protein Goal (g)"
                name="proteinGoal"
                type="number"
                placeholder="Protein Goal"
              />
            </div>
          </div>
            <button
              className="my-4 py-2.5 cursor-pointer text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-md text-center w-full"
              type="submit"
            >
              Register
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationCard;
