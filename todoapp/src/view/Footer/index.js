import React from "react";
import { activeTodosCount } from "../../helpers";

export default function Footer({ todos, setFilter, filter }) {
  const todosLeft = activeTodosCount(todos);
  return (
    <footer className="footer">
      <span className="todo-count">{todosLeft} item left</span>
      <ul className="filters">
        <li onClick={e => setFilter(null)}>
          <a className={!filter ? "selected" : ""}>All</a>
        </li>
        <li onClick={e => setFilter("active")}>
          <a className={filter === "active" ? "selected" : ""}>Active</a>
        </li>
        <li onClick={e => setFilter("complete")}>
          <a className={filter === "complete" ? "selected" : ""}>Completed</a>
        </li>
      </ul>
    </footer>
  );
}
