import React from "react";
import "./StoryReel.css";

const StoryReel = ({ backgroundImage, profilePic, username }) => {
  return (
    <div
      className="story__storyReel"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="story__profilePic">
        <img src={profilePic} alt="profile" className="profilePic" />
      </div>
      <div className="story__username">
        <h5>{username}</h5>
      </div>
    </div>
  );
};

export default StoryReel;
