import React from "react";
import * as Yup from "yup";
import "./RegistrationPage.css";
import { Form, useField, Formik } from "formik";

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

const MyTextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
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
        <div className="error">{meta.error}</div>
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
  email: Yup.string().email("Invalid Email Address").required("Required"),
  password: Yup.string()
    .required("Required")
    .min(8, "Password must be minimum 8 characters")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Include at least one Uppercase, Lowercase, Number and a Special Character"
    ),
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  activityLevel: Yup.string().required("Required"),
  weight: Yup.number()
    .min(1, "Weight must be greater than 0kg")
    .required("Required"),
  height: Yup.number()
    .min(1, "Height must be greater than 0cm")
    .required("Required"),
  carbohydrateGoal: Yup.number()
    .min(1, "Carbohydrate Goal must be greater than 0g")
    .required("Required"),
  calorieGoal: Yup.number()
    .min(1, "Calorie Goal must be greater than 0g")
    .required("Required"),
  fatGoal: Yup.number()
    .min(1, "Fat Goal must be greater than 0g")
    .required("Required"),
  proteinGoal: Yup.number()
    .min(1, "Protein Goal must be greater than 0g")
    .required("Required"),
});

const RegistrationPage = () => {
  return (
    <>
      <h1>Registration Information</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <div className="row">
            <div className="col s12 m6">
              <MyTextInput
                label="Email Address"
                name="email"
                type="email"
                placeholder="johndoe@arceus.com"
              />
            </div>
            <div className="col s12 m6">
              <MyTextInput
                label="Password"
                name="password"
                type="password"
                placeholder="Password"
              />
            </div>
          </div>
          <div className="row">
            <div className="col s12 m6">
              <MyTextInput
                label="First Name"
                name="firstName"
                type="text"
                placeholder="John"
              />
            </div>
            <div className="col s12 m6">
              <MyTextInput
                label="Last Name"
                name="lastName"
                type="text"
                placeholder="Doe"
              />
            </div>
          </div>
          <div className="row">
            <MySelect label="Activity Level" name="activityLevel">
              <option value="">Select an Activity Level</option>
              <option value="sedentary">Sedentary</option>
              <option value="lightlyActive">Lightly Active</option>
              <option value="moderatelyActive">Moderately Active</option>
              <option value="veryActive">Very Active</option>
            </MySelect>
          </div>
          <div className="row">
            <div className="col s12 m6">
              <MyNumberInput
                label="Weight (kg)"
                name="weight"
                type="number"
                placeholder="Weight"
              />
            </div>
            <div className="col s12 m6">
              <MyNumberInput
                label="Height (cm)"
                name="height"
                type="number"
                placeholder="Height"
              />
            </div>
          </div>
          <div className="row">
            <div className="col s12 m6">
              <MyNumberInput
                label="Carbohydrate Goal (g)"
                name="carbohydrateGoal"
                type="number"
                placeholder="Carbohydrate Goal"
              />
            </div>
            <div className="col s12 m6">
              <MyNumberInput
                label="Calorie Goal (g)"
                name="calorieGoal"
                type="number"
                placeholder="Calorie Goal"
              />
            </div>
          </div>
          <div className="row">
            <div className="col s12 m6">
              <MyNumberInput
                label="Fat Goal (g)"
                name="fatGoal"
                type="number"
                placeholder="Fat Goal"
              />
            </div>
            <div className="col s12 m6">
              <MyNumberInput
                label="Protein Goal (g)"
                name="proteinGoal"
                type="number"
                placeholder="Protein Goal"
              />
            </div>
          </div>
          <div className="row">
            <button type="submit">Register</button>
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default RegistrationPage;
