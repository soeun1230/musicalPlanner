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
          <Link to="/musical">musical</Link>
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
