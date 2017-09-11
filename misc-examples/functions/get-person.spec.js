const { testFn, args } = require("effects-as-data/test");
const cmds = require("../cmds");
const getPerson = require("./get-person");

const testGetPerson = testFn(getPerson);

test(
  "getPerson() should return list of names",
  testGetPerson(() => {
    const apiResult = { name: "Luke Skywalker" };
    // prettier-ignore
    return args(1)
    .yieldCmd(cmds.httpGet('https://swapi.co/api/people/1')).yieldReturns(apiResult)
    .returns('Luke Skywalker')
  })
);
