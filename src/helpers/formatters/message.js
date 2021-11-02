import BlobImage from "../../components/UI/BlobImage";
import BlobPdf from "../../components/UI/BlobPdf";

export function truncate(text, length) {
  return text.length > length ? `${text.substring(0, length)}...` : text;
}

export function renderMessage(message) {
  let renderedMessage;
  switch (message.type) {
    case "text":
      renderedMessage = <p>{message?.text?.body}</p>;
      break;
    case "image":
      renderedMessage = <BlobImage imageId={message?.image?.id} />;
      break;
    case "document":
      renderedMessage = (
        <BlobPdf
          pdfId={message?.document?.id}
          filename={message?.document?.filename}
        />
      );
      break;
    case "template":
      renderedMessage = (
        <p>
          <b>➡️ Plantilla: </b>
          {message?.template?.body}
        </p>
      );
      break;
    default:
      renderedMessage = (
        <p>
          {`El siguiente formato será soportado próximamente: `}
          <b>{`${message.type}`}</b>
        </p>
      );
      break;
  }
  return renderedMessage;
}
