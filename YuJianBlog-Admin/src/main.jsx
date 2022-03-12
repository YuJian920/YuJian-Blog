import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./model";
// import Layout from "./components/Layout";
import Router from "./router";

import "./assets/style/index.less";

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById("root")
);
