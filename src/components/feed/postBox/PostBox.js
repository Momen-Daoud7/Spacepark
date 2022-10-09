import React, { useState } from "react";
import { Button } from "@material-ui/core";
import "./PostBox.css";

const PostBox = () => {
  const [input, setInput] = useState("");

  const submitHandler = () => {
    if (input.length > 0) {
      alert(input);
    }

    setInput("");
  };

  return (
    <div className="postBox">
      <div className="postBox__input">
        <img src="./assets/steve.jpg" alt="profile" className="profilePic" />
        <form>
          <input
            placeholder="what's on your mind ?"
            onChange={(e) => setInput(e.target.value)}
          />
        </form>
      </div>
      <Button onClick={submitHandler}>Post</Button>
    </div>
  );
};

export default PostBox;
