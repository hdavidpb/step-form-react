import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import StepsProvider from "./context/StepsProvider";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StepsProvider>
    <App />
  </StepsProvider>
);
