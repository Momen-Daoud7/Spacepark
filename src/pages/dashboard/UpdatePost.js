import React from "react";
import DashboardSidebar from "../../components/dashboard/dashboardSidebar/DashboardSidebar";
import EditPost from "../../components/dashboard/posts/editPost/EditPost";

const UpdatePost = () => {
  return (
    <React.Fragment>
      <div className="app__body">
        <DashboardSidebar />
        <div className="app__dashboardBody">
          <EditPost />
        </div>
      </div>
    </React.Fragment>
  );
};

export default UpdatePost;
