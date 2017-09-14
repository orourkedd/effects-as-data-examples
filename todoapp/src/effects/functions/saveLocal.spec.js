import { testFn, args } from "effects-as-data/test";
import cmds from "../cmds";
import saveLocal from "./saveLocal";

const testSaveLocal = testFn(saveLocal);

test(
  "saveLocal() should save todos to local storage",
  testSaveLocal(() => {
    const todos = [];
    // prettier-ignore
    return args()
      .yieldCmd(cmds.reduxGetState("todos")).yieldReturns(todos)
      .yieldCmd(cmds.setLocal("todos", todos))
      .returns()
  })
);
