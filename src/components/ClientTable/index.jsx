import React from "react";
import "./styles.css";

function ClientTable({ headers, data, tools }) {
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
              <td>{row.agent}</td>
              <td>{row.status}</td>
              <td>{row.createdAt}</td>
              <td className="tools">{tools}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ClientTable;
