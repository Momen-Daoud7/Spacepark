import React from "react";
import Button from "../UI/button/Button";
import Table from "../UI/table/Table";
import { Home } from "@material-ui/icons";

const PostsTable = () => {
  const headers = ["ID", "Name", "Email"];
  const data = [
    { id: 1, name: "Momen Daoud", email: "momendaoud@mail.com" },
    { id: 2, name: "Momen Daoud", email: "momendaoud@mail.com" },
    { id: 3, name: "Momen Daoud", email: "momendaoud@mail.com" },
  ];
  return (
    <div>
      <h2>Posts</h2>
      <Button Icon={Home} text="Add new user" />
      <Table headers={headers} data={data} />
    </div>
  );
};

export default PostsTable;
