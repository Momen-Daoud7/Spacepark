import React, { useEffect } from "react";
import Button from "../UI/button/Button";
import Table from "../UI/table/Table";
import { Home } from "@material-ui/icons";
import { getAllPosts } from "../../../store/reducers/posts";
import { useDispatch, useSelector } from "react-redux";

const PostsTable = () => {
  const posts = useSelector((state) => state.posts.posts);
  console.log(posts);

  const dispatch = useDispatch();
  const headers = ["ID", "Content", "user"];

  useEffect(() => {
    const display = async () => {
      await dispatch(getAllPosts()).unwrap();
    };

    display();
  }, []);
  console.log(posts[0]);
  return (
    <div>
      <h2>Posts</h2>
      <Button Icon={Home} text="Add new user" location="/dashboard/posts/add" />
      {posts && (
        <Table
          headers={headers}
          data={posts}
          detalis={["content", { key: "user", value: "name" }]}
        />
      )}
    </div>
  );
};

export default PostsTable;
