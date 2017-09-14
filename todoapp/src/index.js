import React from "react";
import ReactDOM from "react-dom";
import App from "./view/App";
import { Provider } from "react-redux";
import store from "./state/store";
import functions from "./effects";

// initialize the todos app
functions.init();

// when the state changes, update the local storage copy of the todos
store.subscribe(functions.saveLocal);

ReactDOM.render(
  <Provider store={store}>
    <App functions={functions} />
  </Provider>,
  document.getElementById("root")
);
