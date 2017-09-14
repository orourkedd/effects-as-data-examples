import { handlers } from "effects-as-data-universal/es5";
import { buildReduxHandlers } from "effects-as-data-redux";
import { getLocal, setLocal } from "./store";

export default store => ({
  ...buildReduxHandlers(store),
  ...handlers,
  getLocal,
  setLocal
});
