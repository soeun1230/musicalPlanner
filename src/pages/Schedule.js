import React, { Component } from "react";
import { Link } from "react-router-dom";

class Schedule extends Component {
  render() {
    return (
      <div className="Schedule">
        this is schedule page <br />
        <Link to="/">to main page</Link>
      </div>
    );
  }
}

export default Schedule;
