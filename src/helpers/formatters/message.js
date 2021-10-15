import { BASE_URL } from "../../config";

export function truncate(text, length) {
  return text.length > length ? `${text.substring(0, length)}...` : text;
}

export function renderMessage(messsage) {
  let renderedMessage;
  switch (messsage.type) {
    case "text":
      renderedMessage = <p>{messsage?.text?.body}</p>;
      break;
    case "image":
      renderedMessage = (
        <a
          href={`${BASE_URL}/retrieve_media/${messsage?.image?.id}`}
          target="_blank"
          rel="noreferrer"
          download
        >
          <img
            src={`${BASE_URL}/retrieve_media/${messsage?.image?.id}`}
            alt="Tramy content"
            style={{ width: "100%", maxHeight: "350px" }}
          />
        </a>
      );
      break;
    default:
      renderedMessage = (
        <p>
          {`El siguiente formato será soportado próximamente: `}
          <b>{`${messsage.type}`}</b>
        </p>
      );
      break;
  }
  return renderedMessage;
}
