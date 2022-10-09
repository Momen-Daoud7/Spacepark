import React from "react";
import "./SidebarTop.css";

const SidebarTop = () => {
  return (
    <div className="sidebar__top">
      <img src="./assets/steve.jpg" alt="profile" className="profilePic" />
      <div className="sidebar__topInfo">
        <h3>Momen Daoud</h3>
        <p>@momendaoud</p>
      </div>
    </div>
  );
};

export default SidebarTop;
