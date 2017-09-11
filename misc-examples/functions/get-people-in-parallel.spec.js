const { testFn, args } = require("effects-as-data/test");
const cmds = require("../cmds");
const getPeopleInParallel = require("./get-people-in-parallel");

const testGetPeopleInParallel = testFn(getPeopleInParallel);

test(
  "getPeopleInParallel() should return list of names",
  testGetPeopleInParallel(() => {
    const apiResults = [{ name: "Luke Skywalker" }, { name: "C-3P0" }];
    const getCmds = [
      cmds.httpGet("https://swapi.co/api/people/1"),
      cmds.httpGet("https://swapi.co/api/people/2")
    ];
    // prettier-ignore
    return args([1, 2])
    .yieldCmd(getCmds).yieldReturns(apiResults)
    .returns(["Luke Skywalker", "C-3P0"])
  })
);
