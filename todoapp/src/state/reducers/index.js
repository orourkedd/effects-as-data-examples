import { combineReducers } from "redux";
import app from "./app";
import create from "./create";
import todos from "./todos";

export default combineReducers({
  app,
  create,
  todos
});
