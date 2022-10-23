import { Button } from "@material-ui/core";
import React from "react";
import { useNavigate, NavLink } from "react-router-dom";
import "./Table.css";

const Table = ({ headers, data, detalis, deleteHandler }) => {
  const nav = useNavigate();
  const delteItem = (id) => {
    // deleteHandler(id);
  };
  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            {headers &&
              headers.map((header) => {
                return (
                  <th key={header} data-testid="header">
                    {header}
                  </th>
                );
              })}
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((item) => {
              return (
                <tr key={item.id && item.id} data-testid="data">
                  <td>{item.id}</td>
                  {detalis.map((detail) => {
                    if (typeof detail === "object") {
                      return <td>{item[detail.key][detail.value]}</td>;
                    } else {
                      return <td>{item[detail]}</td>;
                    }
                  })}
                  <td>
                    <Button
                      className="edit-btn"
                      onClick={() => nav(`edit/${item.id}`)}
                    >
                      Edit
                    </Button>
                  </td>
                  <td>
                    <Button className="delete-btn" onClick={delteItem(item.id)}>
                      {" "}
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
