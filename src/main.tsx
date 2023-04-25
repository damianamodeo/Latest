import React from "react";
import ReactDOM from "react-dom/client";
import App from "./apps/proclaimer/app/Proclaimer";
import "./index.css";

if (!localStorage.getItem("initID")) {
  localStorage.setItem("initID", Date.now().toString());
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
