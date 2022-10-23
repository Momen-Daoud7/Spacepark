import React from "react";
import DashboardSidebar from "../../components/dashboard/dashboardSidebar/DashboardSidebar";
import UsersTable from "../../components/dashboard/users/UsersTable";

const MainPage = () => {
  return (
    <React.Fragment>
      <div className="app__body">
        <DashboardSidebar />
        <div className="app__dashboardBody">
          <UsersTable />
        </div>
      </div>
    </React.Fragment>
  );
};

export default MainPage;
