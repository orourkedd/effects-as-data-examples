export function getLocal(key) {
  return {
    type: "getLocal",
    key
  };
}

export function setLocal(key, value) {
  return {
    type: "setLocal",
    key,
    value
  };
}
