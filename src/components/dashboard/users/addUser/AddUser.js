import { unwrapResult } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { createUser } from "../../../../store/reducers/users";
import UserForm from "../UserForm";

const AddUser = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const submitHandler = (values) => {
    console.log(values);
    dispatch(createUser(values)).then(unwrapResult);
    nav("/dashboard/users");
  };
  return (
    <div>
      <UserForm submitHandler={submitHandler} confirm={true} />
    </div>
  );
};

export default AddUser;
