import {
  CommentOutlined,
  MoreHoriz,
  Share,
  ShareOutlined,
  ThumbUp,
  ThumbUpOutlined,
} from "@material-ui/icons";
import React from "react";
import ProfileWithInfo from "../../UI/profileWithInfo/ProfileWithInfo";
import "./Post.css";

const Post = ({ username, profilePic, timestamp, postImage, postText }) => {
  return (
    <div className="post">
      <div className="post__top">
        <ProfileWithInfo
          name={username}
          profilePic={profilePic}
          text={timestamp}
        />
        <MoreHoriz />
      </div>
      <div className="post__body">
        <p>{postText}</p>
        <img src={postImage} />
      </div>
      <div className="post__bottom">
        <div className="post__option">
          <ThumbUpOutlined />
          <p>Like</p>
        </div>
        <div className="post__option">
          <CommentOutlined />
          <p>Comments</p>
        </div>
        <div className="post__option">
          <ShareOutlined />
          <p>Like</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
