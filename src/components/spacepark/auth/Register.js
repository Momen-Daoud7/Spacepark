import { Button } from "@material-ui/core";
import { Formik, Form } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { register } from "../../../store/reducers/auth";
import FormikControl from "../../../formik/FormikControl";

const initialValues = {
  name: "",
  email: "",
  password: "",
  passwordConfirm: "",
};

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().required("Email is required").email("Invalid email"),
  password: Yup.string().required("Password is required"),
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref("password"), ""], "Password doesn't match")
    .required("Password is required"),
});

const Register = () => {
  const dispatch = useDispatch();
  const submitHandler = (values, submitProps) => {
    console.log(values);
    dispatch(register(values)).unwrap();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={submitHandler}
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
            control="input"
            type="password"
            label="Password"
            name="password"
          />
          <FormikControl
            control="input"
            type="password"
            label="Confirm Password"
            name="passwordConfirm"
          />
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

export default Register;
