import React from "react";
import "./styles.css";

function TeamTable({ headers, data, tools }) {
  return (
    <div className="team-wrapper">
      <table className="team-table">
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
              <td className="tools">{"No disponible"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TeamTable;
