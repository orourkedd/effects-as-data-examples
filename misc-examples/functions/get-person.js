const cmds = require("../cmds");

module.exports = function* getPerson(id) {
  const result = yield cmds.httpGet(`https://swapi.co/api/people/${id}`);
  return result.name;
};
