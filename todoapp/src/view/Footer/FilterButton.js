import React from "react";

export default function FilterButton({
  setFilter,
  currentFilter,
  filter,
  label
}) {
  return (
    <li onClick={e => setFilter(filter)}>
      <a className={filter === currentFilter ? "selected" : ""}>{label}</a>
    </li>
  );
}
