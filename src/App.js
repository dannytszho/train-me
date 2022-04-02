import React from "react";
import { render } from "react-dom";
import Aware from "./Aware";
import Home from "./Home";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <header>
        <Link to="/">Train Me</Link>
      </header>
      <Routes>
        <Route path="/aware" element={<Aware />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

render(<App />, document.getElementById("root"));
