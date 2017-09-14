import React from "react";
import FilterButton from "./FilterButton";

const buttons = [
  {
    filter: null,
    label: "All"
  },
  {
    filter: "active",
    label: "Active"
  },
  {
    filter: "complete",
    label: "Complete"
  }
];

export default function FilterButtonList({ setFilter, currentFilter }) {
  return (
    <ul className="filters">
      {buttons.map(({ label, filter }) => {
        return (
          <FilterButton
            key={label}
            currentFilter={currentFilter}
            filter={filter}
            label={label}
            setFilter={setFilter}
          />
        );
      })}
    </ul>
  );
}
