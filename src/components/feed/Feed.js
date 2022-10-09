import React from "react";
import "./Feed.css";
import PostBox from "./postBox/PostBox";
import Story from "./Story/Story";

const Feed = () => {
  return (
    <div className="feed">
      <Story />
      <PostBox />
    </div>
  );
};

export default Feed;
