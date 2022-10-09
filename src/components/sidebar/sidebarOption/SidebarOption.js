import React from "react";
import "./SidebarOption.css";

const SidebarOption = ({ title, Icon }) => {
  return (
    <div className="sidebar__option">
      <Icon />
      <h4>{title}</h4>
    </div>
  );
};

export default SidebarOption;
