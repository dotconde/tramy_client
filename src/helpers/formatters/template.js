export function templateFieldCounter(text) {
  // TODO: Improve regex
  const regex = /({{)\w+/g;
  const found = text.match(regex);
  return found.length;
}
