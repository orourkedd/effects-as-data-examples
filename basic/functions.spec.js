const { testFn, args } = require("effects-as-data/test");
const cmds = require("./cmds");
const { getPeople } = require("./functions");

const testGetPeople = testFn(getPeople);

test(
  "getPeople() should return list of names",
  testGetPeople(() => {
    const apiResults = { results: [{ name: "Luke Skywalker" }] };
    // prettier-ignore
    return args()
    .yieldCmd(cmds.httpGet('https://swapi.co/api/people')).yieldReturns(apiResults)
    .returns(['Luke Skywalker'])
  })
);
