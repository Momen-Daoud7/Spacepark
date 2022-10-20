import { Button } from "@material-ui/core";
import { Formik, Form } from "formik";
import React from "react";
import * as Yup from "yup";
import FormikControl from "../../../formik/FormikControl";

const UserForm = ({ submitHandler }) => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "user",
  };
  const onSubmit = (values, onSubmitProps) => {
    submitHandler(values);
    onSubmitProps.resetForm();
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().required("Email is required").email("Invalid email"),
    password: Yup.string().required("Password is required"),
    role: Yup.string().required("Role is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), ""], "Password doesn't match")
      .required("Password is required"),
  });

  const options = [
    { key: "User", value: "user" },
    { key: "Admin", value: "admin" },
  ];

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {(formik) => (
        <Form>
          <FormikControl control="input" type="text" label="Name" name="name" />
          <FormikControl
            control="input"
            type="email"
            label="Email"
            name="email"
          />
          <FormikControl
            control="select"
            type="role"
            label="Role"
            name="role"
            options={options}
          />
          <FormikControl
            control="input"
            type="password"
            label="Password"
            name="password"
          />
          <FormikControl
            control="input"
            type="password"
            label="Confirm Password"
            name="confirmPassword"
          />
          <Button
            type="submit"
            disabled={formik.isSubmitting}
            className="form-button"
          >
            Add
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default UserForm;
