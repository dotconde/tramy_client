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
        <a href={`${BASE_URL}/retrieve_media/${messsage?.image?.id}`}>
          <img
            src={`${BASE_URL}/retrieve_media/${messsage?.image?.id}`}
            alt="Tramy content"
          />
        </a>
      );
    // eslint-disable-next-line no-fallthrough
    default:
      break;
  }
  return renderedMessage;
}
