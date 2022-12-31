import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";

const header1 = React.createElement("h1", {className: "header"}, "This is my first App");
const header2 = React.createElement("h3", {className: "header", id: "bold__text"}, "welcome Chetan");

const root = createRoot(document.getElementById("root"))
root.render([header1, header2]);