import React, { Component } from "react";
import { avatar } from "../CoachAvatars";
import firebase from "firebase";
import gameLogo from "../../layout/Frequents/gameLogo";
import "./CoachCard.css";

class CoachCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="coach-img-container">
          <img
            src={avatar(this.props.coach.avatar)}
            alt=""
            className="coach-img"
          />
        </div>
        <div className="content">
          <h2>
            <b>{this.props.coach.name}</b>
          </h2>
          <hr />
          <img
            src={gameLogo(this.props.coach.game)}
            alt=""
            className="game-logo"
          />
          <p>{this.props.coach.description}</p>
          <div className="booking-button">
            <p>Book Coach</p>
            {/* link this to a stripe checkout prompt */}
            <button>${this.props.coach.rate}/hr</button>
            <p>{this.props.coach.stars}/5.0</p>
          </div>
        </div>
      </div>
    );
  }
}

export default CoachCard;
