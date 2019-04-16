import React, { Component } from "react";
import gameLogo from "../../layout/Frequents/gameLogo";
import "./CoachCard.css";

class CoachCard extends Component {
  state = {
    avatar: "",
    rate: 0,
    name: ""
  };

  render() {
    return (
      <div className="card">
        <div className="coach-img">
          <img
            src="https://bnetcmsus-a.akamaihd.net/cms/gallery/GOWK7Y2YLJYC1549652245653.png"
            alt="coach"
            className="coach-image"
          />
        </div>
        <div className="content">
          <h2>
            <b>ShadowBurn</b>
          </h2>
          <hr />
          <img src={gameLogo("overwatch")} alt="" className="game-logo" />
          <p>Overwatch Flex DPS Player</p>
          <div className="booking-button">
            <p>Book Coach</p>
            <button>$100/hr</button>
          </div>
        </div>
      </div>
    );
  }
}

export default CoachCard;
