import React from "react";
import { v4 as uuidv4 } from "uuid";
import "./styles.css";

function ClientTable({ headers, data, tools }) {
  return (
    <div className="client-wrapper">
      <table className="client-table">
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
                <b>{row?.attributes?.name || "-"}</b>
              </td>
              <td>{row?.attributes?.phone || "-"}</td>
              <td>{row?.attributes?.email || "-"}</td>
              <td>
                {`${row?.attributes?.attended_by?.first_name} ${row?.attributes?.attended_by?.last_name}` ||
                  "No disponible"}
              </td>
              <td>{row?.attributes?.stage?.name || "-"}</td>
              <td>{row?.attributes?.created_at || "-"}</td>
              {/* <td className="tools">{tools}</td> */}
              <td className="tools">{"No disponible"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ClientTable;
