import Table from "../UI/table/Table";
import { Home } from "@material-ui/icons";
import "./UsersTable.css";
import Button from "../UI/button/Button";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllUsers, deleteUser } from "../../../store/reducers/users";

const UsersTable = () => {
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();
  const headers = ["ID", "Name", "Email"];
  useEffect(() => {
    const display = async () => {
      await dispatch(getAllUsers()).unwrap();
    };

    display();
  }, []);

  // Delete user
  const delteHandler = (id) => {
    dispatch(deleteUser(id)).unwrap();
  };

  return (
    <div className="usersTable">
      <h2>Users</h2>
      <Button Icon={Home} text="Add new user" location="/dashboard/users/add" />
      {users && (
        <Table
          headers={headers}
          data={users}
          detalis={["name", "email"]}
          editLink="/dashboard/users/edit"
          deleteLink="/dashboard/users/delete"
          deleteHandler={delteHandler}
        />
      )}
    </div>
  );
};

export default UsersTable;
