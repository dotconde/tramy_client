import { useState } from "react";
import { BASE_URL } from "../../../config";
import useToken from "../../../hooks/useToken";
import { ReactComponent as PdfIcon } from "../../../assets/icons/pdf-color.svg";
import { ReactComponent as DownloadIcon } from "../../../assets/icons/download.svg";
import "./styles.css";

function BlobPdf({ pdfId, filename }) {
  const { token } = useToken();
  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const [blob, setBlob] = useState(undefined);

  function handlePdfDownload() {
    const url = `${BASE_URL}/retrieve_media/${pdfId}`;
    fetch(url, options)
      .then((res) => res.blob())
      .then((blob) => setBlob(URL.createObjectURL(blob)));
  }

  if (!pdfId) {
    return <p>Cargando...</p>;
  }

  return (
    <div className="blob-pdf">
      <PdfIcon />
      <a
        className="download-pdf"
        href={blob}
        target="_blank"
        rel="noreferrer"
        download
        onClick={handlePdfDownload}
      >
        <p>{filename}</p>
        <DownloadIcon />
      </a>
    </div>
  );
}

export default BlobPdf;
