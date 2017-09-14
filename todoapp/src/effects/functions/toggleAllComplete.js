import cmds from "../cmds";
import { allTodosComplete } from "../../helpers";

export default function* toggleAllComplete() {
  const todos = yield cmds.reduxGetState("todos");
  yield allTodosComplete(todos)
    ? cmds.markAllTodosActive()
    : cmds.markAllTodosComplete();
}
