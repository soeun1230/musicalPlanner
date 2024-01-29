import React, { Component } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Main from "./pages/Main";
import Actor from "./pages/Actor";
import Musical from "./pages/Musical";
import Schedule from "./pages/Schedule";
import Counting from "./pages/Counting";

class Routing extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/actor" element={<Actor />} />
          <Route path="/musical" element={<Musical />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/counting" element={<Counting />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default Routing;
