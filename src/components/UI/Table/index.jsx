import React from "react";
import "./styles.css";
import photoProfile from "../../../assets/img/photo.jpg";
import { ReactComponent as PencilIcon } from "../../../assets/icons/pencil.svg";
import { ReactComponent as TrashIcon } from "../../../assets/icons/trash.svg";

function Table({ headers, data }) {
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
          <tr>
            <td className="name">
              <img src={photoProfile} alt="profile" />
              <p>
                <b>Jefferson Cahuana</b>
              </p>
            </td>
            <td>+51 93221214</td>
            <td>deyvicollado@pacifico.com</td>
            <td>Jefe de ventas</td>
            <td>Administrador</td>
            <td>12/06/2021, 14:10</td>
            <td className="tools">
              <a href="/">
                <PencilIcon />
              </a>
              <a href="/">
                <TrashIcon />
              </a>
            </td>
          </tr>
          <tr>
            <td className="name">
              <img src={photoProfile} alt="profile" />
              <p>
                <b>Jefferson Cahuana</b>
              </p>
            </td>
            <td>+51 93221214</td>
            <td>deyvicollado@pacifico.com</td>
            <td>Jefe de ventas</td>
            <td>Administrador</td>
            <td>12/06/2021, 14:10</td>
            <td className="tools">
              <a href="/">
                <PencilIcon />
              </a>
              <a href="/">
                <TrashIcon />
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;
