import React from "react";
import Table from "../UI/table/Table";
import { Home } from "@material-ui/icons";
import "./UsersTable.css";
import Button from "../UI/button/Button";

const UsersTable = () => {
  const headers = ["ID", "Name", "Email"];
  const data = [
    { id: 1, name: "Momen Daoud", email: "momendaoud@mail.com" },
    { id: 2, name: "Momen Daoud", email: "momendaoud@mail.com" },
    { id: 3, name: "Momen Daoud", email: "momendaoud@mail.com" },
  ];
  return (
    <div className="usersTable">
      <h2>Users</h2>
      <Button Icon={Home} text="Add new user" location="/dashboard/users/add" />
      <Table headers={headers} data={data} />
    </div>
  );
};

export default UsersTable;
