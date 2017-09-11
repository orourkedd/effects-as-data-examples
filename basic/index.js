const { buildFunctions } = require("effects-as-data");
const handlers = require("./handlers");
const functions = require("./functions");

const fns = buildFunctions({}, handlers, functions);

fns
  .getPeople()
  .then(names => {
    console.log("\n");
    console.log("Function Results:");
    console.log(names.join(", "));
  })
  .catch(console.error);
