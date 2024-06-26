import React from "react";
import ReactDOM from "react-dom/client";
import { BriefcaseApp } from "./BriefcaseApp.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <BriefcaseApp />
    </BrowserRouter>
  </React.StrictMode>
);
