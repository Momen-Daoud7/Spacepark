import React from "react";
import { Button } from "@material-ui/core";
import "./PostBox.css";

const PostBox = () => {
  return (
    <div className="postBox">
      <div className="postBox__input">
        <img src="./assets/steve.jpg" alt="profile" className="profilePic" />
        <form>
          <input placeholder="what's on your mind ?" />
        </form>
      </div>
      <Button>Post</Button>
    </div>
  );
};

export default PostBox;
