// NOTE: The effects-as-data-universal module
// has production-ready http cmds
function httpGet(url) {
  return {
    type: "httpGet",
    url
  };
}

module.exports = {
  httpGet
};
