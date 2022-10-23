import { Button } from "@material-ui/core";
import { Formik, Form } from "formik";
import React from "react";
import * as Yup from "yup";
import FormikControl from "../../../formik/FormikControl";

const PostForm = ({ submitHandler, savedValues }) => {
  const initialValues = {
    content: "",
    userId: 1,
  };
  const onSubmit = (values, onSubmitProps) => {
    submitHandler(values);
    onSubmitProps.resetForm();
  };

  const validationSchema = Yup.object({
    content: Yup.string().required("Content is required"),
  });

  return (
    <Formik
      initialValues={savedValues || initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {(formik) => (
        <Form>
          <FormikControl control="textarea" label="Content" name="content" />
          <Button
            type="submit"
            disabled={formik.isSubmitting}
            className="form-button"
          >
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default PostForm;
