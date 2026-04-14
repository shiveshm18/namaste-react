import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("div",{id: "heading"},
                [React.createElement("h1",{key:1},"Fuck U Bitches"),
                 React.createElement("h1",{key:2},"piss off")   
                ]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);