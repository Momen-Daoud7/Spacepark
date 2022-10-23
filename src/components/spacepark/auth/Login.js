import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { login } from "../../../store/reducers/auth";
import FormikControl from "../../../formik/FormikControl";
import { useEffect } from "react";
import { useNavigate } from "react-router";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string().required("Email is required").email("Invalid email"),
  password: Yup.string().required("Password is required"),
});

const Login = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.userInfo);
  const nav = useNavigate();
  const submitHandler = (values, submitProps) => {
    console.log(values);
    dispatch(login(values)).unwrap();
  };

  useEffect(() => {
    if (user) {
      return nav("/");
    }
  }, [user, nav]);
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={submitHandler}
    >
      {(formik) => (
        <Form>
          <FormikControl
            control="input"
            type="email"
            name="email"
            label="Email"
          />
          <FormikControl
            control="input"
            type="password"
            name="password"
            label="Password"
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

export default Login;
