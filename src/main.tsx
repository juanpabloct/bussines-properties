import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Allroutes } from "./pages/AllRoutes";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Router>
    <Allroutes />
  </Router>
);
