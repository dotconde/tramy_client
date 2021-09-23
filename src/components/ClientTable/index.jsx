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
                <b>{row?.attributes?.name || "-"}</b>
              </td>
              <td>{row?.attributes?.phone || "-"}</td>
              <td>{row?.attributes?.email || "-"}</td>
              <td>{row?.attributes?.agent || "No disponible"}</td>
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
