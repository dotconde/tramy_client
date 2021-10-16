import { useState, useEffect } from "react";
import { BASE_URL } from "../../../config";
import useToken from "../../../hooks/useToken";

function BlobImage({ imageId }) {
  const { token } = useToken();
  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const [blob, setBlob] = useState(undefined);
  const url = `${BASE_URL}/retrieve_media/${imageId}`;
  useEffect(() => {
    fetch(url, options)
      .then((res) => res.blob())
      .then((blob) => setBlob(URL.createObjectURL(blob)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  if (!blob) {
    return null;
  }

  return (
    <img
      alt="Contenido de Whatsapp by Tramy"
      src={blob}
      style={{ width: "100%", maxHeight: "350px" }}
    />
  );
}

export default BlobImage;
