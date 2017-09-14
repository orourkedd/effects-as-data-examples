import cmds from "../cmds";

export default function* toggleComplete(todo) {
  const updated = {
    ...todo,
    complete: !todo.complete
  };
  yield cmds.updateTodo(updated);
}
