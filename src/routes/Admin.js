import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";
import { getUser } from "../store/reducers/users";

const Admin = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const user = useSelector((state) => state.users.users);
  const dispatch = useDispatch();
  useEffect(() => {
    const display = async () => await dispatch(getUser(userInfo.id)).unwrap();
    display();
  }, []);
  console.log(user);
  if (user[0].role !== "admin") {
    return (
      <div className="unauthorized">
        <h1>Unauthorized :(</h1>
        <span>
          <NavLink to="/login">Login</NavLink> to get acccess
        </span>
      </div>
    );
  }
  return <Outlet />;
};

export default Admin;
