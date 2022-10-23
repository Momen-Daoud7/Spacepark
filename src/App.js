import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";

import "./App.css";
import Login from "./components/spacepark/auth/Login";
import Register from "./components/spacepark/auth/Register";
import Protected from "./routes/Protected";
import Admin from "./routes/Admin";
import HomePage from "./pages/spacepark/HomePage";
import MainPage from "./pages/dashboard/MainPage";
import CreateUser from "./pages/dashboard/CreateUser";
import UpdateUser from "./pages/dashboard/UpdateUser";
import Posts from "./pages/dashboard/Posts";
import CreatePost from "./pages/dashboard/CreatePost";
import UpdatePost from "./pages/dashboard/UpdatePost";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/register" exact element={<Register />} />
          <Route path="/login" exact element={<Login />} />
          <Route element={<Protected />}>
            <Route path="/" exact element={<HomePage />} />
            <Route element={<Admin />}>
              <Route path="/dashboard" exact element={<MainPage />} />
              <Route path="/dashboard/users" exact element={<MainPage />} />
              <Route
                path="/dashboard/users/add"
                exact
                element={<CreateUser />}
              />
              <Route
                path="/dashboard/users/edit/:id"
                exact
                element={<UpdateUser />}
              />
              <Route path="/dashboard/posts" exact element={<Posts />} />

              <Route
                path="/dashboard/posts/add"
                exact
                element={<CreatePost />}
              />
              <Route
                path="/dashboard/posts/edit/:id"
                exact
                element={<UpdatePost />}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
