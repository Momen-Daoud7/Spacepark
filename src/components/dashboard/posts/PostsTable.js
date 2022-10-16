import React from "react";
import Button from "../UI/button/Button";
import Table from "../UI/table/Table";

const PostsTable = () => {
  return (
    <div>
      <h2>Posts</h2>
      <Button Icon={Home} text="Add new user" />
      <Table headers={headers} data={data} />
    </div>
  );
};

export default PostsTable;
