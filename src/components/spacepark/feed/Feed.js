import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Feed.css";
import Post from "./post/Post";
import PostBox from "./postBox/PostBox";
import Story from "./Story/Story";
import {
  getAllPosts,
  deletePost,
  updatePost,
} from "../../../store/reducers/posts";

const Feed = () => {
  const posts = useSelector((state) => state.posts.posts);
  const [updatedPost, setUpdatedPost] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const display = async () => {
      await dispatch(getAllPosts()).unwrap();
    };

    display();
  }, []);

  const renderPosts = () => {
    if (posts.length > 0) {
      return posts.map((post) => {
        return (
          <div key={post.id} data-testid="post">
            <Post
              postText={post.content}
              profilePic="./assets/steve.jpg"
              username="Momen Dauod"
              timestamp="13 hours"
            />
            <input
              placeholder="edit post"
              onChange={(e) => setUpdatedPost(e.target.value)}
            />
            <button
              onClick={async () =>
                await dispatch(
                  updatePost({ id: post.id, data: { content: updatedPost } })
                )
              }
            >
              Update post
            </button>
            <button
              onClick={async () => await dispatch(deletePost({ id: post.id }))}
            >
              Delete post
            </button>
          </div>
        );
      });
    }
  };
  return (
    <div className="feed">
      <Story />
      <PostBox />
      {renderPosts()}
    </div>
  );
};

export default Feed;
