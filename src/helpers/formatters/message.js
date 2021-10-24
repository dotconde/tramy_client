import BlobImage from "../../components/UI/BlobImage";

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
      renderedMessage = <BlobImage imageId={messsage?.image?.id} />;
      break;
    case "template":
      renderedMessage = (
        <p>
          <b>➡️Plantilla: </b>
          {messsage?.template?.body}
        </p>
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
