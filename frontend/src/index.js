import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import './App.scss'
import ScrollToTop from "./ScrollToTop";
import { UserProvider } from "./lib/context/user";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.Fragment>
    <UserProvider>
        <BrowserRouter>
        <ScrollToTop />
            <App />
        </BrowserRouter>
      </UserProvider>
    </React.Fragment>
);

