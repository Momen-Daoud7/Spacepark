import { ErrorMessage, Field } from "formik";
import TextError from "../Errors/TextError";

const Select = ({ label, name, options, ...rest }) => {
  return (
    <div className="form-control">
      <label>{label}</label>
      <Field as="select" name={name} {...rest}>
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.key}
            </option>
          );
        })}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default Select;
