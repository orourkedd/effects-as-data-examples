const getPeople = require("./get-people");
const getPeopleReuseFn = require("./get-people-reuse-fn");
const getPeopleInParallel = require("./get-people-in-parallel");
const getPerson = require("./get-person");
const getPersonErrorHandling = require("./get-person-error-handling");

module.exports = {
  getPeople,
  getPeopleInParallel,
  getPeopleReuseFn,
  getPerson,
  getPersonErrorHandling
};
