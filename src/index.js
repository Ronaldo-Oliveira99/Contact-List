import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import store from "./store/index";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  rootElement
);
