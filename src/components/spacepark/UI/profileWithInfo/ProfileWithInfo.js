import React from "react";
import "./ProfileWithInfo.css";

const ProfileWithInfo = ({ profilePic, name, text }) => {
  return (
    <div className="profileWithInfo">
      {profilePic && (
        <img src={profilePic} alt="profile" className="profilePic" />
      )}
      <div className="sidebar__topInfo">
        {name && <h3>{name}</h3>}
        {text && <p>{text}</p>}
      </div>
    </div>
  );
};

export default ProfileWithInfo;
