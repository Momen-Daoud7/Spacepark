import React from "react";
import "./Story.css";
import StoryReel from "./StoryReel/StoryReel";

const Story = () => {
  return (
    <div className="story">
      <StoryReel
        username="Momen Daoud"
        profilePic="/assets/steve.jpg"
        backgroundImage="/assets/steve.jpg"
      />
      <StoryReel
        username="Momen Daoud"
        profilePic="/assets/steve.jpg"
        backgroundImage="/assets/steve.jpg"
      />
      <StoryReel
        username="Momen Daoud"
        profilePic="/assets/steve.jpg"
        backgroundImage="/assets/steve.jpg"
      />
      <StoryReel
        username="Momen Daoud"
        profilePic="/assets/steve.jpg"
        backgroundImage="/assets/steve.jpg"
      />
    </div>
  );
};

export default Story;
