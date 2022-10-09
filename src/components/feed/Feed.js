import React from "react";
import "./Feed.css";
import Post from "./post/Post";
import PostBox from "./postBox/PostBox";
import Story from "./Story/Story";

const Feed = () => {
  return (
    <div className="feed">
      <Story />
      <PostBox />
      <Post
        postText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          quisquam dolorum quo, dolorem modi repellendus odit neque error est, a
          nisi ratione, veritatis deserunt ab. Porro iusto adipisci dolorum
          obcaecati!"
        postImage="./assets/steve.jpg"
        profilePic="./assets/steve.jpg"
        username="Momen Dauod"
        timestamp="13 hours"
      />
      <Post
        postText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          quisquam dolorum quo, dolorem modi repellendus odit neque error est, a
          nisi ratione, veritatis deserunt ab. Porro iusto adipisci dolorum
          obcaecati!"
        postImage="./assets/steve.jpg"
        profilePic="./assets/steve.jpg"
        username="Momen Dauod"
        timestamp="13 hours"
      />
      <Post
        postText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          quisquam dolorum quo, dolorem modi repellendus odit neque error est, a
          nisi ratione, veritatis deserunt ab. Porro iusto adipisci dolorum
          obcaecati!"
        postImage="./assets/steve.jpg"
        profilePic="./assets/steve.jpg"
        username="Momen Dauod"
        timestamp="13 hours"
      />
    </div>
  );
};

export default Feed;
