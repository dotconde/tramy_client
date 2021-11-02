import { useState } from "react";
import { BASE_URL } from "../../../config";
import useToken from "../../../hooks/useToken";

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
    <a
      href={blob}
      target="_blank"
      rel="noreferrer"
      download
      onClick={handlePdfDownload}
    >
      {filename}
    </a>
  );
}

export default BlobPdf;
