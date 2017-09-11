const fetch = require("isomorphic-fetch");

// NOTE: The effects-as-data-universal module
// has production-ready http handlers
function httpGet(cmd) {
  return fetch(cmd.url).then(r => r.json());
}

module.exports = {
  httpGet
};
