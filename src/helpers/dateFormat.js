export function toHourMinute(timestamp) {
  let date = new Date(parseInt(timestamp) * 1000);
  let finalFormat = date.getHours() + ":" + date.getMinutes();
  return finalFormat;
}
