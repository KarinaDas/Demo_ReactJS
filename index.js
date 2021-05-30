// var React = require("react");
import React from "react";

// var ReactDOM = require("react-dom");
import ReactDOM from "react-dom";

import Heading from "./Heading";
import List from "./List";

// var fname = "Karina";
// var lname = "Das";

// ReactDOM.render(WHAT TO Show, WHERE TO SHOW);
//1
// ReactDOM.render(
//   <h1>Hello {fname + " " + lname}</h1>,
//   document.getElementById("root")
// );
// {js itself}={7 + 6}={any variable}

//2
// ReactDOM.render(
//   <h1>
//     Hello {fname} {lname}
//   </h1>,
//   document.getElementById("root")
// );

//3
// html {js {`html ${js}`}}
// ReactDOM.render(
//   <h1>
//     Hello {`${fname} ${lname}`}
//   </h1>,
//   document.getElementById("root")
// );

// 'div' tag is used as a single tag as it is container tag
// ReactDOM.render(
//   <div>
//     <h1>Hello ShapeAI</h1> <p>This is ver easy</p>
//   </div>,
//   document.getElementById("root")
//   );

ReactDOM.render(
  <div>
    <Heading />
    {/* <img src="ShapeAI_img.jpg" 
         alt="ShapeAI logo" /> */}
    <List />
    <List />
    <Heading />
    <List />
    <Heading />
    <List />
    <Heading />
    <List />
  </div>,
  document.getElementById("root")
);
