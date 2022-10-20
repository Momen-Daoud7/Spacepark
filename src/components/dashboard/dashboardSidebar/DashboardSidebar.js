import React from "react";
import SidebarOption from "./sidebarOption/SidebarOption";
import { Home } from "@material-ui/icons";
import "./DashboardSidebar.css";
import { NavLink } from "react-router-dom";

const DashboardSidebar = () => {
  return (
    <div className="dashboardSidebar">
      <NavLink to="/">
        <h1>Spacepark</h1>
      </NavLink>
      <div className="dashboardSidebar__sidebarOptions">
        <SidebarOption Icon={Home} title="Users" location="/dashboard/users" />
        <SidebarOption
          Icon={Home}
          title="Add user"
          location="/dashboard/users/add"
        />
        <SidebarOption Icon={Home} title="Posts" location="/dashboard/posts" />
        <SidebarOption
          Icon={Home}
          title="Add post"
          location="/dashboard/posts/add"
        />
      </div>
    </div>
  );
};

export default DashboardSidebar;
