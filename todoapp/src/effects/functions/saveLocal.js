import cmds from "../cmds";

export default function* saveLocal() {
  const todos = yield cmds.reduxGetState("todos");
  yield cmds.setLocal("todos", todos);
}
