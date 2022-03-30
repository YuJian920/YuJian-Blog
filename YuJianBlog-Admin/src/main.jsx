import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import store from "./model";
import App from "@/pages";

import "lib-flexible/flexible";
import "./assets/style/index.less";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <QueryClientProvider client={new QueryClient()}>
        <App />
      </QueryClientProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
