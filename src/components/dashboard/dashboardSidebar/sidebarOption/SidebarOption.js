import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./SidebarOption.css";

const SidebarOption = ({ location, Icon, title }) => {
  return (
    <Link to={location}>
      <div className="dashboardSidebar__sidebarOption">
        <Icon />
        <h3>{title}</h3>
      </div>
    </Link>
  );
};

export default SidebarOption;
