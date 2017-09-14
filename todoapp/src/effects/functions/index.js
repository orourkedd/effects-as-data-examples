import createTodo from "./createTodo";
import toggleComplete from "./toggleComplete";
import toggleAllComplete from "./toggleAllComplete";
import saveLocal from "./saveLocal";
import init from "./init";

// Add the function name as a string so that
// telemetry makes sense after minification
createTodo.fn = "createTodo";
toggleComplete.fn = "toggleComplete";
toggleAllComplete.fn = "toggleAllComplete";
saveLocal.fn = "saveLocal";
init.fn = "init";

export default {
  createTodo,
  toggleComplete,
  toggleAllComplete,
  saveLocal,
  init
};
