import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Feed.css";
import Post from "./post/Post";
import PostBox from "./postBox/PostBox";
import Story from "./Story/Story";
import { getAllPosts } from "../../store/reducers/posts";

const Feed = () => {
  const posts = useSelector((state) => state.posts.posts);
  const [updatedPost, setUpdatedPost] = useState("");
  const dispatch = useDispatch();
  console.log(posts[0]);

  useEffect(() => {
    const display = async () => {
      await dispatch(getAllPosts()).unwrap();
    };

    display();
  }, []);

  const deletePostHandler = (id) => {};
  const renderPosts = () => {
    if (posts.length > 0) {
      return posts[0].map((post) => {
        return (
          <div key={post.id}>
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
            {/* <button
              onClick={() =>
                dispatch(updatePost({ id: post.id, content: updatedPost }))
              }
            >
              Update post
            </button>
            <button onClick={() => dispatch(deletePost({ id: post.id }))}>
              Delete post
            </button> */}
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
