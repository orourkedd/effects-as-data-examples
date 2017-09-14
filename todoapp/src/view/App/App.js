import "todomvc-app-css/index.css";
import "todomvc-common/base.css";
import React from "react";
import Header from "../Header";
import List from "../List";
import Footer from "../Footer";
import DemoNotes from "./DemoNotes";

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
      <DemoNotes />
    </div>
  );
}

export default App;
