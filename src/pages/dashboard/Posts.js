import React from "react";
import DashboardSidebar from "../../components/dashboard/dashboardSidebar/DashboardSidebar";
import PostsTable from "../../components/dashboard/posts/PostsTable";

const Posts = () => {
  return (
    <React.Fragment>
      <div className="app__body">
        <DashboardSidebar />
        <div className="app__dashboardBody">
          <PostsTable />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Posts;
