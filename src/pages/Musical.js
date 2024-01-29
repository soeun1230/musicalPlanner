import React, { Component } from "react";

import "../css/musical.css";

import Linking from "../components/musical_comp/linking";
import Header from "../components/musical_comp/header";
import Ranking from "../components/musical_comp/ranking";

class Musical extends Component {
  render() {
    return (
      <div className="Musical">
        <Header></Header>
        <div class="musical_middle">
          <Linking></Linking>
          <div class="middle">
            <Ranking></Ranking>
          </div>
        </div>
      </div>
    );
  }
}

export default Musical;
