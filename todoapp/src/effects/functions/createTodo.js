import cmds from "../cmds";

export default function* createTodo() {
  const content = yield cmds.reduxGetState("create.content");
  if (!hasContent(content)) return;
  const timestamp = yield cmds.now();
  yield cmds.addTodo({
    content,
    timestamp,
    complete: false
  });
  yield cmds.setContent("");
}

function hasContent(s) {
  return !!(s || "").trim();
}
