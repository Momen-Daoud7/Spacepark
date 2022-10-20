import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";

import "./App.css";
import Feed from "./components/spacepark/feed/Feed";
import Header from "./components/spacepark/header/Header";
import Sidebar from "./components/spacepark/sidebar/Sidebar";
import Widgets from "./components/spacepark/widgets/Widgets";
import DashboardSidebar from "./components/dashboard/dashboardSidebar/DashboardSidebar";
import UsersTable from "./components/dashboard/users/UsersTable";
import PostsTable from "./components/dashboard/posts/PostsTable";
import AddUser from "./components/dashboard/users/addUser/AddUser";
import AddPost from "./components/dashboard/posts/addPost.js/AddPost";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            exact
            element={
              <React.Fragment>
                <Header />
                <div className="app__body">
                  <Sidebar />
                  <Feed />
                  <Widgets />
                </div>
              </React.Fragment>
            }
          />

          <Route
            path="/dashboard"
            exact
            element={
              <React.Fragment>
                <div className="app__body">
                  <DashboardSidebar />
                  <div className="app__dashboardBody">
                    <UsersTable />
                  </div>
                </div>
              </React.Fragment>
            }
          />

          <Route
            path="/dashboard/users"
            exact
            element={
              <React.Fragment>
                <div className="app__body">
                  <DashboardSidebar />
                  <div className="app__dashboardBody">
                    <UsersTable />
                  </div>
                </div>
              </React.Fragment>
            }
          />

          <Route
            path="/dashboard/users/add"
            exact
            element={
              <React.Fragment>
                <div className="app__body">
                  <DashboardSidebar />
                  <div className="app__dashboardBody">
                    <AddUser />
                  </div>
                </div>
              </React.Fragment>
            }
          />

          <Route
            path="/dashboard/posts"
            exact
            element={
              <React.Fragment>
                <div className="app__body">
                  <DashboardSidebar />
                  <div className="app__dashboardBody">
                    <PostsTable />
                  </div>
                </div>
              </React.Fragment>
            }
          />

          <Route
            path="/dashboard/posts/add"
            exact
            element={
              <React.Fragment>
                <div className="app__body">
                  <DashboardSidebar />
                  <div className="app__dashboardBody">
                    <AddPost />
                  </div>
                </div>
              </React.Fragment>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
