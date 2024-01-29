import React, { Component } from "react";
import { Link } from "react-router-dom";

class Counting extends Component {
  render() {
    return (
      <div className="Counting">
        this is counting page <br />
        <Link to="/">to main page</Link>
      </div>
    );
  }
}

export default Counting;
