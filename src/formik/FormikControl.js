import Input from "./UI/Input";
import Select from "./UI/Select";
import Textarea from "./UI/Textarea";

const FormikControl = ({ control, ...rest }) => {
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "select":
      return <Select {...rest} />;
    case "textarea":
      return <Textarea {...rest} />;
    default:
      return null;
  }
};

export default FormikControl;
