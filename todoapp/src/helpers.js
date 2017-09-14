export function allTodosComplete(todos) {
  return todos.every(t => t.complete);
}

export function activeTodosCount(todos) {
  return todos.reduce((total, t) => {
    return t.complete ? total : total + 1;
  }, 0);
}

export function filterTodos(filter, todos) {
  if (!filter) return todos;
  if (filter === "active") return todos.filter(t => !t.complete);
  return todos.filter(t => t.complete);
}
