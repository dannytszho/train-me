import React from "react";
import { render } from "react-dom";
import Aware from "./Aware";

const App = () => {
  return (
    <div className="text-red-600">
      <Aware />
    </div>
  );
};

render(<App />, document.getElementById("root"));
