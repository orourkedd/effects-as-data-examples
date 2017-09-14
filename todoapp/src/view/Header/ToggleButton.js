import "./ToggleButton.css";
import React from "react";
import { allTodosComplete } from "../../helpers";

export default function ToggleButton({ todos, toggleAllComplete }) {
  const selected = allTodosComplete(todos) && todos.length ? "selected" : "";
  return (
    <div
      className={`better-toggle-all ${selected}`}
      onClick={toggleAllComplete}
    >
      <span>❯</span>
    </div>
  );
}
