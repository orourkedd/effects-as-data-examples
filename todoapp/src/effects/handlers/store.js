import store from "store";

export function setLocal({ key, value }) {
  return store.set(key, value);
}

export function getLocal({ key }) {
  return store.get(key);
}
