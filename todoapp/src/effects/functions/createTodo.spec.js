import { testFn, args } from "effects-as-data/test";
import cmds from "../cmds";
import createTodo from "./createTodo";

const testCreateTodo = testFn(createTodo);

test(
  "createTodo() should create todo",
  testCreateTodo(() => {
    const content = "foo";
    const timestamp = 123;
    // prettier-ignore
    return args()
      .yieldCmd(cmds.reduxGetState("create.content")).yieldReturns(content)
      .yieldCmd(cmds.now()).yieldReturns(timestamp)
      .yieldCmd(cmds.addTodo({ content, timestamp, complete: false})).yieldReturns()
      .yieldCmd(cmds.setContent("")).yieldReturns()
      .returns()
  })
);

test(
  "createTodo() should noop if content is empty",
  testCreateTodo(() => {
    const content = "";
    // prettier-ignore
    return args()
      .yieldCmd(cmds.reduxGetState("create.content")).yieldReturns(content)
      .returns()
  })
);

test(
  "createTodo() should noop if content is not empty but is only spaces",
  testCreateTodo(() => {
    const content = "   ";
    // prettier-ignore
    return args()
      .yieldCmd(cmds.reduxGetState("create.content")).yieldReturns(content)
      .returns()
  })
);
