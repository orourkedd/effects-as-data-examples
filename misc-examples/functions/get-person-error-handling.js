const cmds = require("../cmds");

module.exports = function* getPersonErrorHandling(id) {
  const getCmd = cmds.httpGet(`https://swapi.co/api/people/${id}`);
  //  default to Luke Skywalker on error or falsey return value
  const result = yield cmds.either(getCmd, { name: "Luke Skywalker" });
  return result.name;
};
