import { testFn, args } from "effects-as-data/test";
import cmds from "../cmds";
import init from "./init";

const testInit = testFn(init);

test(
  "init() should initialize app",
  testInit(() => {
    const todos = [];
    // prettier-ignore
    return args()
      .yieldCmd(cmds.getLocal("todos")).yieldReturns(todos)
      .yieldCmd(cmds.setTodos(todos))
      .returns()
  })
);

test(
  "init() should not set todos if no todos are in local storage",
  testInit(() => {
    const todos = null;
    // prettier-ignore
    return args()
      .yieldCmd(cmds.getLocal("todos")).yieldReturns(todos)
      .returns()
  })
);
