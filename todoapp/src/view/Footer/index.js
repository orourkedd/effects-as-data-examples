import React from "react";
import ActiveCount from "./ActiveCount";
import FilterButtonList from "./FilterButtonList";

export default function Footer({ todos, setFilter, filter }) {
  return (
    <footer className="footer">
      <ActiveCount todos={todos} />
      <FilterButtonList currentFilter={filter} setFilter={setFilter} />
    </footer>
  );
}
