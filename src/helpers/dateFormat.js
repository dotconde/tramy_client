export function tramyFormat(timestamp) {
  let date = new Date(parseInt(timestamp));
  let finalFormat =
    date.getDate() +
    "/" +
    (date.getMonth() + 1) +
    "/" +
    date.getFullYear() +
    " " +
    date.getHours() +
    ":" +
    date.getMinutes();
  return finalFormat;
}
