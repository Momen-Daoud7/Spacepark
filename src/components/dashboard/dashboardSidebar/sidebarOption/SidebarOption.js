import React from "react";
import "./SidebarOption.css";

const SidebarOption = ({ Icon, title }) => {
  return (
    <div className="dashboardSidebar__sidebarOption">
      <Icon />
      <h3>{title}</h3>
    </div>
  );
};

export default SidebarOption;
