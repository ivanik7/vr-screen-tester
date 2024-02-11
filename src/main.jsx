import React from "react";
import ReactDOM from "react-dom/client";
import App from "./ui/App.jsx";
import { StateProvider } from "./context/StateContext.jsx";
import "./index.css";
import XRApp from "./xr/XRApp.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <StateProvider>
            <App />
            <XRApp />
        </StateProvider>
    </React.StrictMode>
);
