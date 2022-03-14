import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./model";
import Router from "./router";

import "lib-flexible/flexible";
import "./assets/style/index.less";

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById("root")
);
