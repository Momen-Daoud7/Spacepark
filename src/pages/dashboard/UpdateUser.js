import React from "react";
import DashboardSidebar from "../../components/dashboard/dashboardSidebar/DashboardSidebar";
import EditUser from "../../components/dashboard/users/editUser/EditUser";

const UpdateUser = () => {
  return (
    <React.Fragment>
      <div className="app__body">
        <DashboardSidebar />
        <div className="app__dashboardBody">
          <EditUser />
        </div>
      </div>
    </React.Fragment>
  );
};

export default UpdateUser;
