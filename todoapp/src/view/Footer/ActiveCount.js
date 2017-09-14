import React from "react";
import { activeTodosCount } from "../../helpers";

export default function ActiveCount({ todos }) {
  const todosLeft = activeTodosCount(todos);
  return <span className="todo-count">{todosLeft} item left</span>;
}
