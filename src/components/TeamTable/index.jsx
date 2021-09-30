import React from "react";
import { v4 as uuidv4 } from "uuid";
import "./styles.css";

function TeamTable({ headers, data, tools }) {
  return (
    <div className="team-wrapper">
      <table className="team-table">
        <thead className="categories">
          <tr>
            {headers.map((header) => (
              <th key={uuidv4()}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={uuidv4()}>
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
