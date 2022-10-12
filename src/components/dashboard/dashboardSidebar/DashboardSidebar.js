import React from "react";
import SidebarOption from "./sidebarOption/SidebarOption";
import { Home } from "@material-ui/icons";
import "./DashboardSidebar.css";

const DashboardSidebar = () => {
  return (
    <div className="dashboardSidebar">
      <h1>Spacepark</h1>
      <div className="dashboardSidebar__sidebarOptions">
        <SidebarOption Icon={Home} title="Users" />
        <SidebarOption Icon={Home} title="Add user" />
        <SidebarOption Icon={Home} title="Posts" />
        <SidebarOption Icon={Home} title="Add post" />
      </div>
    </div>
  );
};

export default DashboardSidebar;
