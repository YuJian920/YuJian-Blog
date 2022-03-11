import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./model";
import Layout from "./components/Layout";

import "./assets/style/index.less";

ReactDOM.render(
  <Provider store={store}>
    <Layout />
  </Provider>,
  document.getElementById("root")
);
