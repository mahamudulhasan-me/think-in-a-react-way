import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ContextExample } from "./components/ContextExample.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ContextExample>
      <App />
    </ContextExample>
  </React.StrictMode>
);
