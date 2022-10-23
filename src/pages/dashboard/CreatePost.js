import React from "react";
import DashboardSidebar from "../../components/dashboard/dashboardSidebar/DashboardSidebar";
import AddPost from "../../components/dashboard/posts/addPost.js/AddPost";

const CreatePost = () => {
  return (
    <React.Fragment>
      <div className="app__body">
        <DashboardSidebar />
        <div className="app__dashboardBody">
          <AddPost />
        </div>
      </div>
    </React.Fragment>
  );
};

export default CreatePost;
