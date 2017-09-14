import React from "react";
import Todo from "./Todo";
import { filterTodos } from "../../helpers";

export default function List({ filter, todos, toggleComplete, deleteTodo }) {
  const filtered = filterTodos(filter, todos);
  return (
    <ul className="todo-list">
      {filtered.map(t => (
        <Todo
          key={t.timestamp}
          todo={t}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
}
