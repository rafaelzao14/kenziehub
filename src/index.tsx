import React, { ReactNode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Auth from "./Providers/Auth";
import RegisterProv from "./Providers/Register";
import { AnimatePresence } from "framer-motion";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <AnimatePresence>
      <BrowserRouter>
        <Auth>
          <RegisterProv>
            <ToastContainer autoClose={2500} />
            <App />
          </RegisterProv>
        </Auth>
      </BrowserRouter>
    </AnimatePresence>
  </React.StrictMode>
);
