import React from "react";

export default function Todo({ todo, toggleComplete, deleteTodo }) {
  const className = todo.complete ? "completed" : "";
  return (
    <li className={className}>
      <div className="view">
        <Input todo={todo} toggleComplete={toggleComplete} />
        <label>{todo.content}</label>
        <button className="destroy" onClick={e => deleteTodo(todo)} />
      </div>
    </li>
  );
}

function Input({ todo, toggleComplete }) {
  return (
    <input
      className="toggle"
      type="checkbox"
      checked={todo.complete}
      onChange={e => toggleComplete(todo)}
    />
  );
}
