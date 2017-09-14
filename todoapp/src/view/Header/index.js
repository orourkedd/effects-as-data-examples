import "./header.css";
import React from "react";
import { allTodosComplete } from "../../helpers";

export default function Header({
  content,
  createTodo,
  setContent,
  todos,
  toggleAllComplete
}) {
  const selected = allTodosComplete(todos) && todos.length ? "selected" : "";
  return (
    <header>
      <h1>todos</h1>
      <div className="header">
        <div
          className={`better-toggle-all ${selected}`}
          onClick={toggleAllComplete}
        >
          <span>❯</span>
        </div>
        <form
          onSubmit={e => {
            e.preventDefault();
            createTodo();
          }}
        >
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            onChange={e => setContent(e.target.value)}
            value={content}
          />
          <input type="submit" style={{ display: "none" }} />
        </form>
      </div>
    </header>
  );
}
