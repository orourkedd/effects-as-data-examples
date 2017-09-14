import { testFn, args } from "effects-as-data/test";
import cmds from "../cmds";
import toggleComplete from "./toggleComplete";

const testToggleComplete = testFn(toggleComplete);

test(
  "toggleComplete() should mark a completed todo as active",
  testToggleComplete(() => {
    const todo = { complete: true, content: "foo" };
    const updatedTodo = { complete: false, content: "foo" };
    // prettier-ignore
    return args(todo)
      .yieldCmd(cmds.updateTodo(updatedTodo))
      .returns()
  })
);

test(
  "toggleComplete() should mark an active todo as complete",
  testToggleComplete(() => {
    const todo = { complete: false, content: "foo" };
    const updatedTodo = { complete: true, content: "foo" };
    // prettier-ignore
    return args(todo)
      .yieldCmd(cmds.updateTodo(updatedTodo))
      .returns()
  })
);
