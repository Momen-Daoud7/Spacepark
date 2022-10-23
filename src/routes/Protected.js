import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";
import { getUser } from "../store/reducers/users";

const Protected = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const user = useSelector((state) => state.users.users);
  const dispatch = useDispatch();
  useEffect(() => {
    const display = async () => await dispatch(getUser(userInfo.id)).unwrap();
    display();
  }, [dispatch]);
  if (!user[0]) {
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

export default Protected;
