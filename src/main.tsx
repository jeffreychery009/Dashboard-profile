import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ContextProvider } from "./context/contextProvider";
import { TodoProvider } from "./context/todoProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ContextProvider>
      <TodoProvider>
        <App />
      </TodoProvider>
    </ContextProvider>
  </React.StrictMode>
);
