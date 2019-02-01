import React from "react";
import ReactDOM from "react-dom";
import Time from "./Time";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Time />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
