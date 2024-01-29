import React, { Component } from "react";
import { Link } from "react-router-dom";

class Linking extends Component {
  render() {
    return (
      <nav>
        <ul>
          <Link to="/">main</Link>
          <br />
          <br />
          <Link to="/actor">actor</Link>
          <br />
          <br />
          <Link to="/schedule">schedule</Link>
          <br />
          <br />
          <Link to="/counting">counting</Link>
        </ul>
      </nav>
    );
  }
}

export default Linking;
