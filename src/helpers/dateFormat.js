export function toHourMinute(timestamp) {
  let date = new Date(parseInt(timestamp) * 1000);
  let finalFormat =
    date.getHours() +
    ":" +
    (date.getMinutes() < 10 ? "0" : "") +
    date.getMinutes();
  return finalFormat;
}

export function toDateTime(timestamp) {
  let date = new Date(parseInt(timestamp) * 1000);
  let finalFormat =
    date.getDay() +
    "/" +
    date.getMonth() +
    "/" +
    date.getFullYear() +
    " " +
    date.getHours() +
    ":" +
    (date.getMinutes() < 10 ? "0" : "") +
    date.getMinutes();
  return finalFormat;
}
