import React from "react";
import "./ProfileWithInfo.css";

const ProfileWithInfo = ({ profilePic, name, text }) => {
  return (
    <div className="profileWithInfo">
      <img src={profilePic} alt="profile" className="profilePic" />
      <div className="sidebar__topInfo">
        <h3>{name}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ProfileWithInfo;
