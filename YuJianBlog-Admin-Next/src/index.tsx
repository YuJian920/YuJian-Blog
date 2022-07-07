import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { reduxStore } from "./store";
import CoreApp from "./pages/App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={reduxStore}>
      <BrowserRouter>
        <CoreApp />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
