import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { createPost } from "../../../../store/reducers/posts";
import "./PostBox.css";
import { useDispatch } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";

const PostBox = () => {
  const initialPostState = {
    id: null,
    content: "",
    userId: 1,
    image: "",
  };

  const [post, setPost] = useState(initialPostState);
  const dispatch = useDispatch();

  const inputChangeHandler = (e) => {
    const { value } = e.target;
    setPost({ ...post, ["content"]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(post);
    if (post.content.trim().length > 0) {
      dispatch(createPost(post))
        .then(unwrapResult)
        .then((data) => {
          console.log(data);
          setPost({
            content: "",
            image: "",
          });
        });
    }
  };

  return (
    <div className="postBox">
      <div className="postBox__input">
        <img src="./assets/steve.jpg" alt="profile" className="profilePic" />
        <form onSubmit={submitHandler}>
          <input
            placeholder="what's on your mind ?"
            onChange={inputChangeHandler}
            value={post.content}
            name="content"
          />
        </form>
      </div>
      <Button onClick={submitHandler}>Post</Button>
    </div>
  );
};

export default PostBox;
