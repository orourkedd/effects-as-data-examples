import "todomvc-app-css/index.css";
import "todomvc-common/base.css";
import "./App.css";
import React from "react";
import Header from "../Header";
import List from "../List";
import Footer from "../Footer";

function App({
  content,
  createTodo,
  deleteTodo,
  filter,
  setContent,
  setFilter,
  todos,
  toggleAllComplete,
  toggleComplete
}) {
  return (
    <div>
      <section className="todoapp">
        <Header
          setContent={setContent}
          content={content}
          createTodo={createTodo}
          todos={todos}
          toggleAllComplete={toggleAllComplete}
        />
        <List
          filter={filter}
          todos={todos}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
        />
        <Footer todos={todos} setFilter={setFilter} filter={filter} />
      </section>
      <footer className="demo-notes">
        <h1>Demo Notes</h1>
        <p>Open your console to see effects-as-data telemetry in action.</p>
        <p>
          Your todos are saved in local storage so you should be able to refresh
          and restore.
        </p>
      </footer>
    </div>
  );
}

export default App;
