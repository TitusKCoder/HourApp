import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import AppSocket from "./AppSocket";
// import "./styles/common.css";
import "./styles/chatroom.css";


ReactDOM.render(
  <React.StrictMode>
    <App />
    <AppSocket />
  </React.StrictMode>,
  document.getElementById("root")
);

