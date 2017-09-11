const cmds = require("../cmds");
const getPerson = require("./get-person");

module.exports = function* getPeopleReuseFn(ids) {
  return yield ids.map(id => cmds.call(getPerson, id));
};
