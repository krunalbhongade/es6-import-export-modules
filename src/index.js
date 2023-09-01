import React from "react";
import ReactDOM from "react-dom";
import pi from "./math.js";
import { tripplePi, doublePi } from "./math.js";

ReactDOM.render(
  <ul>
    <li>{pi}</li>
    <li>{doublePi()}</li>
    <li>{tripplePi()}</li>
  </ul>,
  document.getElementById("root")
);
