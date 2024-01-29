import React, { Component } from "react";

import "../css/main.css";

import Header from "../components/main_comp/header";
import Linking from "../components/main_comp/linking";
import Calender from "../components/main_comp/calender";
import Ranking from "../components/main_comp/ranking";

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <Header></Header>
        <div className="main_middle">
          <Linking></Linking>
          <div className="middle">
            <Calender></Calender>
            <br />
            <br />
            <Ranking></Ranking>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
