import "./header.css";
import React from "react";
import ToggleButton from "./ToggleButton";
import NewTodoInput from "./NewTodoInput";

export default function Header({
  content,
  createTodo,
  setContent,
  todos,
  toggleAllComplete
}) {
  return (
    <header>
      <h1>todos</h1>
      <div className="header">
        <ToggleButton toggleAllComplete={toggleAllComplete} todos={todos} />
        <NewTodoInput
          content={content}
          createTodo={createTodo}
          setContent={setContent}
        />
      </div>
    </header>
  );
}
