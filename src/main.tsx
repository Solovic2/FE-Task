import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import ErrorBoundary from "./components/ui/ErrorBoundary.tsx";
import "./index.css";
import App from "./App.tsx";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Router>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
        <ToastContainer />
      </Router>
    </QueryClientProvider>
  </React.StrictMode>
);