import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "antd/dist/reset.css";
import App from "./App";
import "./index.css";
import "./styles/techshed-original.css";
import "./styles/techshed-overrides.css";
import "./styles/techshed-dark.css";
import store from "./store/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
