import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/style.min.css";
import "./assets/fonts/stylesheet.css";
import ThemeProvider from "./providers/ThemeProvider";
import { NotificationContainer } from "react-notifications";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<React.StrictMode>
    <ThemeProvider>
        <App />
    </ThemeProvider>
    <NotificationContainer />
</React.StrictMode>);