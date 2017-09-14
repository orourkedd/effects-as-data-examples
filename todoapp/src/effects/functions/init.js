import cmds from "../cmds";

export default function* init() {
  const todos = yield cmds.getLocal("todos");
  if (todos) yield cmds.setTodos(todos);
}
