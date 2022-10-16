import React from "react";
import "./Table.css";

const Table = ({ headers, data }) => {
  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            {headers &&
              headers.map((header) => {
                return <th key={header}>{header}</th>;
              })}
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
