// Expose regenerator runtime globally at the entrypoint of the app.
// The is required to support generators in create-react-app
const regeneratorRuntime = require("regenerator-runtime");
global.regeneratorRuntime = regeneratorRuntime;
require("./app");
