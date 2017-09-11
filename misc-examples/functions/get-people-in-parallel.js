const cmds = require("../cmds");

module.exports = function* getPeopleInParallel(ids) {
  const getCmds = ids.map(id =>
    cmds.httpGet(`https://swapi.co/api/people/${id}`)
  );
  const results = yield getCmds;
  const names = results.map(p => p.name);
  return names;
};
