import React from "react";
import ProfileWithInfo from "../../UI/profileWithInfo/ProfileWithInfo";
import "./SidebarTop.css";

const SidebarTop = () => {
  return (
    <div className="sidebar__top">
      <ProfileWithInfo
        name="Momen Daoud"
        profilePic="./assets/steve.jpg"
        text="@momendaoud"
      />
    </div>
  );
};

export default SidebarTop;
