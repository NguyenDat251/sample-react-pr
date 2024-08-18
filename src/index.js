import { jsx as _jsx } from "react/jsx-runtime";
import { createRoot } from "react-dom/client";
import React from 'react';
import App from "./App";
var domNode = document.getElementById("root");
if (domNode) {
    var root = createRoot(domNode);
    root.render(_jsx(React.StrictMode, { children: _jsx(App, {}) }));
}
else {
    console.error("Failed to find the root element");
}
