import { CodeSharp } from "@material-ui/icons";
import { unwrapResult } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { updateUser, getUser } from "../../../../store/reducers/users";
import UserForm from "../UserForm";

const EditUser = () => {
  const user = useSelector((state) => state.users.users);

  const param = useParams();
  const dispatch = useDispatch();
  const nav = useNavigate();
  const submitHandler = (values) => {
    console.log(values);
    dispatch(updateUser({ id: param.id, data: values }))
      .then(unwrapResult)
      .then((data) => console.log(data));
    nav("/dashboard/users");
  };
  useEffect(() => {
    const display = async () => {
      await dispatch(getUser(param.id)).then(unwrapResult);
    };

    display();
  }, []);

  console.log(user[0]);
  return (
    <div>
      {user[0] && (
        <UserForm
          submitHandler={submitHandler}
          savedValues={user[0]}
          confirm={false}
        />
      )}
    </div>
  );
};

export default EditUser;
