const { testFn, args } = require("effects-as-data/test");
const cmds = require("../cmds");
const getPersonErrorHandling = require("./get-person-error-handling");

const testGetPersonErrorHandling = testFn(getPersonErrorHandling);

test(
  "getPersonErrorHandling() should return list of names and default to Luke Skywalker on error",
  testGetPersonErrorHandling(() => {
    const apiResult = { name: "C-3P0" };
    const getCmd = cmds.httpGet("https://swapi.co/api/people/2");
    // prettier-ignore
    return args(2)
    .yieldCmd(cmds.either(getCmd, { name: "Luke Skywalker"})).yieldReturns(apiResult)
    .returns('C-3P0')
  })
);
