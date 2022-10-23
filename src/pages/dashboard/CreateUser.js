import React from "react";
import DashboardSidebar from "../../components/dashboard/dashboardSidebar/DashboardSidebar";
import AddUser from "../../components/dashboard/users/addUser/AddUser";

const CreateUser = () => {
  return (
    <React.Fragment>
      <div className="app__body">
        <DashboardSidebar />
        <div className="app__dashboardBody">
          <AddUser />
        </div>
      </div>
    </React.Fragment>
  );
};

export default CreateUser;
