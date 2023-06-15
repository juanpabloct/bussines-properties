import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { AllRoutes } from "./pages/AllRoutes";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {
      <Router>
        <AllRoutes />
      </Router>
    }
  </React.StrictMode>
);