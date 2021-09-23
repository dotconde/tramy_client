import React from "react";
import "./styles.css";

function TeamTable({ headers, data, tools }) {
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
                <b>{row.attributes.full_name || "Desconocido"}</b>
              </td>
              <td>{row.attributes.email || "Sin email"}</td>
              <td>
                <b>{row.attributes.role}</b>
              </td>
              <td>{row.attributes.active ? "Sí 🟢" : "No 🔴"}</td>
              <td>{"-"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TeamTable;

// TODO: Add action options with the following line:
{
  /* <td className="tools">{tools}</td> */
}
