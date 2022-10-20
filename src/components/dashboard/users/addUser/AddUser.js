import UserForm from "../UserForm";

const AddUser = () => {
  const submitHandler = (values) => {
    console.log(values);
  };
  return (
    <div>
      <UserForm submitHandler={submitHandler} />
    </div>
  );
};

export default AddUser;
