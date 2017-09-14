// Helper function for telemetry
const getPathFromStack = stack => {
  const fns = stack.map(s => s.fn);
  const names = fns.map(f => f.fn || f.name || "anonymous");
  return names.join(".");
};

// Configure some demo telemetry
export function onCommandComplete(t) {
  const cmd = t.command;
  const path = getPathFromStack(t.config.stack);
  // mute this bc its a lot of noise
  if (path.match(/saveLocal/)) return;
  const pathClean = path.replace(/_callee/g, "anonymous");
  switch (cmd.type) {
    case "reduxDispatch":
      console.log(
        "%cREDUX",
        "color: #397be5",
        `Function: ${pathClean}(), Latency: ${t.latency}ms,`,
        "Action:",
        t.command.action
      );
      break;
    default:
      console.log(
        "%cCommand",
        "color: #16cc65",
        `Function: ${pathClean}(), Latency: ${t.latency}ms,`,
        "Command:",
        t.command
      );
      console.log("%cCommand Result:", "color: #16cc65", t.result);
  }
}
