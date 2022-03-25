import React from "react";
import { render } from "react-dom";
import Aware from "./Aware";

const App = () => {
  return (
    <div>
      <h1>Train Me!</h1>
      <Aware color="blue" shape="cirle" />
      <Aware color="yellow" shape="square" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
