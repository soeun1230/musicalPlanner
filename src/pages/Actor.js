import React, { Component } from "react";

import "../css/actor.css";

import Linking from "../components/actor_comp/linking";
import Header from "../components/actor_comp/header";
import Ranking from "../components/actor_comp/ranking";

class Actor extends Component {
  render() {
    return (
      <div className="Actor">
        <Header></Header>
        <div class="actor_middle">
          <Linking></Linking>
          <div class="middle">
            <Ranking></Ranking>
          </div>
        </div>
      </div>
    );
  }
}

export default Actor;
