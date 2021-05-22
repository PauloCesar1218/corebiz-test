import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import GlobalStyle from "./assets/style/Global";

ReactDOM.render(
    <React.StrictMode>
        <App />
        <GlobalStyle />
    </React.StrictMode>,
    document.getElementById("root")
);
