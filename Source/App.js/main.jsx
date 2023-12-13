import React from "react";
import { ReactDOM } from "react-dom/client";
import main from "./App"
import "./app.css";

import { Provider } from "react-redux";
import store from "../Pages/store";

ReactDOM.createRoot(Document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);