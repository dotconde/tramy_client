import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Modal from "react-modal";
import ClientForm from "../ClientForm";
import { attendedByFormat } from "../../helpers/formatters/react-trello";
import "./styles.css";

function ClientTable({ headers, data = [], tools }) {
  const [currentLead, setCurrentLead] = useState(undefined);
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      padding: "0",
      border: "none",
      boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    },
  };

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (data) => {
    setCurrentLead(data);
    setIsOpen(true);
  };

  const handleCloseModal = () => setIsOpen(false);

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
              <td>{attendedByFormat(row?.attributes?.attended_by)}</td>
              <td>{row?.attributes?.stage?.name || "-"}</td>
              <td>{row?.attributes?.created_at || "-"}</td>
              <td className="tools">
                <div onClick={() => handleClick(row)}>{tools[1]}</div>
              </td>
            </tr>
          ))}
          {/* Modal edition */}
          <Modal
            onRequestClose={handleCloseModal}
            isOpen={isOpen}
            style={customStyles}
            ariaHideApp={false}
          >
            <div className="client__modal-header">
              <h1>Editar cliente</h1>
              <button
                className="client__close-button"
                onClick={handleCloseModal}
              >
                X
              </button>
            </div>
            <ClientForm data={currentLead} setIsOpen={setIsOpen} />
          </Modal>
        </tbody>
      </table>
    </div>
  );
}

export default ClientTable;
