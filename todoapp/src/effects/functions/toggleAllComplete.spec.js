import { testFn, args } from "effects-as-data/test";
import cmds from "../cmds";
import toggleAllComplete from "./toggleAllComplete";

const testToggleAllComplete = testFn(toggleAllComplete);

test(
  "toggleAllComplete() should mark all todos complete there are any incomplete",
  testToggleAllComplete(() => {
    const todos = [{ complete: false }];
    // prettier-ignore
    return args()
      .yieldCmd(cmds.reduxGetState("todos")).yieldReturns(todos)
      .yieldCmd(cmds.markAllTodosComplete())
      .returns()
  })
);

test(
  "toggleAllComplete() should mark all todos active if all are complete",
  testToggleAllComplete(() => {
    const todos = [{ complete: true }];
    // prettier-ignore
    return args()
      .yieldCmd(cmds.reduxGetState("todos")).yieldReturns(todos)
      .yieldCmd(cmds.markAllTodosActive())
      .returns()
  })
);
