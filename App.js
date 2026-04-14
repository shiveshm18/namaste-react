import React from "react";
import ReactDOM from "react-dom/client";

//old way: React.createElemen => creates react element (js object) => html object on render
/* const heading = React.createElement("div",{id: "heading"},
                [React.createElement("h1",{key:1},"Fuck U Bitches"),
                 React.createElement("h1",{key:2},"piss off")   
                ]); */

// modern way: JSX => React.createElemen => creates react element (js object) => html object on render
//  JSX is transpiled by bibal
const heading = (
    <h3 className="head">
        People
    </h3>
);

//React Component
const Component2 = ()=> <h2>Bow before your king</h2>;

const Component = ()=> (
    <div>
        {heading}
        <h1 id="heading">I am the King of the World</h1>
        <Component2 />
    </div>
    
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Component />);