import { buildFunctions } from "effects-as-data/es5";
import { generateFunctionsFromActions } from "effects-as-data-redux";
import buildHandlers from "./handlers";
import functions from "./functions";
import * as reduxActions from "../state/actions";
import store from "../state/store";
import { onCommandComplete } from "./telemetry";

// generate effects-as-data function from redux actions.
// this is similar to bindActionCreators() in redux
const reduxFunctions = generateFunctionsFromActions(reduxActions);

// put all the function on a single object
const allFunctions = {
  ...functions,
  ...reduxFunctions
};

// add the onCommandComplete for a telemetry demo
const config = { onCommandComplete };

const handlers = buildHandlers(store);

// generate normal, promise-returning function from effects-as-data functions
export default buildFunctions(config, handlers, allFunctions);
