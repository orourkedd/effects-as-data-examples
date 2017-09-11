const cmds = require("./cmds");

function* getPeople() {
  const { results } = yield cmds.httpGet("https://swapi.co/api/people");
  const names = results.map(p => p.name);
  return names;
}

module.exports = {
  getPeople
};
