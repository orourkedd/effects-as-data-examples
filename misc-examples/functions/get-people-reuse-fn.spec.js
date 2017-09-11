const { testFn, args } = require("effects-as-data/test");
const cmds = require("../cmds");
const getPeopleReuseFn = require("./get-people-reuse-fn");
const getPerson = require("./get-person");

const testGetPeopleReuseFn = testFn(getPeopleReuseFn);

test(
  "getPeopleReuseFn() should return list of names",
  testGetPeopleReuseFn(() => {
    const fnResults = ["Luke Skywalker", "C-3P0"];
    const getCmds = [cmds.call(getPerson, 1), cmds.call(getPerson, 2)];
    // prettier-ignore
    return args([1, 2])
    .yieldCmd(getCmds).returns(fnResults)
  })
);
