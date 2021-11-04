import moment from "moment";

export function unixToFriendlyDate(timestamp) {
  return moment.unix(timestamp).format("DD/MM/YYYY hh:mm a");
}
