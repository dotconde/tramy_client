import React from "react";
import "./styles.css";

function Table({ headers, data, tools }) {
  return (
    <div className="table">
      <table>
        <thead className="categories">
          <tr>
            {headers.map((header) => (
              <th>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr>
              <td>
                <b>{row.name}</b>
              </td>
              <td>{row.phone}</td>
              <td>{row.email}</td>
              <td>{row.role || row.agent}</td>
              <td>{row.permission || row.status}</td>
              <td>{row.lastActive}</td>
              <td className="tools">{tools}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
