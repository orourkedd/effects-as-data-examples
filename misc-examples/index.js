const { buildFunctions } = require("effects-as-data");
const handlers = require("./handlers");
const functions = require("./functions");
const inquirer = require("inquirer");
const prompt = inquirer.createPromptModule();

// Use `npm run start-w-telemetry` to see the output with telemetry
const config = process.env.TELEMETRY
  ? {
      onCall: telemetry => {
        console.log("Telemetry (from onCall):", telemetry);
      },
      onCallComplete: telemetry => {
        console.log("Telemetry (from onCallComplete):", telemetry);
      },
      onCommand: telemetry => {
        console.log("Telemetry (from onCommand):", telemetry);
      },
      onCommandComplete: telemetry => {
        console.log("Telemetry (from onCommandComplete):", telemetry);
      }
    }
  : {};

const fns = buildFunctions(config, handlers, functions);

prompt([
  {
    type: "list",
    name: "fn",
    message: "Which example would you like to run?",
    choices: [
      "getPeople()",
      "getPeopleInParallel()",
      "getPeopleReuseFn()",
      "getPerson()",
      "getPersonErrorHandling()"
    ]
  }
]).then(function({ fn }) {
  switch (fn) {
    case "getPeople()":
      return fns
        .getPeople()
        .then(names => console.log("People:", names))
        .catch(console.error);

    case "getPeopleInParallel()":
      return fns
        .getPeopleInParallel([1, 2])
        .then(names => console.log("People:", names))
        .catch(console.error);

    case "getPeopleReuseFn()":
      return fns
        .getPeopleReuseFn([1, 2])
        .then(names => console.log("People:", names))
        .catch(console.error);

    case "getPerson()":
      return fns
        .getPerson(1)
        .then(name => console.log("Person:", name))
        .catch(console.error);

    case "getPersonErrorHandling()":
      return fns
        .getPersonErrorHandling(1000) // 1000 is not a valid id
        .then(name => console.log("Person:", name))
        .catch(console.error);
  }
});
