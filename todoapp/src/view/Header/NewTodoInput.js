import "./NewTodoInput.css";
import React from "react";

export default function NewTodoInput({ content, createTodo, setContent }) {
  return (
    <form
      className="new-todo-form"
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
  );
}
