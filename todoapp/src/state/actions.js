import {
  SET_TODOS,
  ADD_TODO,
  UPDATE_TODO,
  DELETE_TODO,
  MARK_ALL_TODOS_COMPLETE,
  MARK_ALL_TODOS_ACTIVE,
  SET_FILTER,
  NEW_TODO_SET_CONTENT
} from "./constants";

function buildAction(type) {
  return function(payload) {
    return {
      type,
      payload
    };
  };
}

export const setTodos = buildAction(SET_TODOS);
export const addTodo = buildAction(ADD_TODO);
export const updateTodo = buildAction(UPDATE_TODO);
export const deleteTodo = buildAction(DELETE_TODO);
export const markAllTodosComplete = buildAction(MARK_ALL_TODOS_COMPLETE);
export const markAllTodosActive = buildAction(MARK_ALL_TODOS_ACTIVE);
export const setFilter = buildAction(SET_FILTER);
export const setContent = buildAction(NEW_TODO_SET_CONTENT);
