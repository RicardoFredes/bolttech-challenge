import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { ModalProvider } from "./contexts/modal.context";
import { ProjectsProvider } from "./contexts/projects.contexts";
import { ToastProvider } from "./contexts/toast.context";
import "./styles/index.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ToastProvider>
      <ProjectsProvider>
        <ModalProvider>
          <App />
        </ModalProvider>
      </ProjectsProvider>
    </ToastProvider>
  </React.StrictMode>
);
