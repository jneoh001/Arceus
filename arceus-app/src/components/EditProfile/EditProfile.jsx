import React from "react";
import { useFormik, useField, Form, Formik } from "formik";
import styled from 'styled-components';
import * as Yup from "yup";


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

const EditProfile = ({styles}) => {
  return (
    <>
      <h1>Edit Profile</h1>
      <Formik
        initialValues={{
          weight: 0,
          height: 0,
          carbohydrateGoal: 0,
          fatGoal: 0,
          proteinGoal: 0,
        }}
        validationSchema={Yup.object({
          weight: Yup.number()
            .min(0,"Weight must be greater than 1kg."),
          height: Yup.number()
            .min(0,"Height must be greater than 0cm"),
          carbohydrateGoal: Yup.number()
            .min(0,"Carbohydrate Goal must be greater than 0g"),
          fatGoal: Yup.number()
            .min(0,"Fat Goal must be greater than 0g"),
          proteinGoal: Yup.number()
            .min(0,"Protein Goal must be greater than 0g"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form className="form">
          <div className="form-group">
            <MyNumberInput
              label="Weight"
              name="weight"
              type="number"
              placeholder="Weight"
            />
          </div>
          <div className="form-group">
            <MyNumberInput
              label="Height"
              name="height"
              type="number"
              placeholder="Height"
            />
          </div>
          <div className="form-group">
            <MyNumberInput
              label="Carbohydrate Goal"
              name="carbohydrateGoal"
              type="number"
              placeholder="Carbohydrate Goal"
            />
          </div>
          <div className="form-group">
            <MyNumberInput
              label="Fat Goal"
              name="fatGoal"
              type="number"
              placeholder="Fat Goal"
            />
          </div>
          <div className="form-group">
            <MyNumberInput
              label="Protein Goal"
              name="proteinGoal"
              type="number"
              placeholder="Protein Goal"
            />
          </div>
          <div className="form-group">
            <button type="submit">Submit</button>
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default EditProfile;
