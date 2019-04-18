import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import firebase from "firebase";
import "./CoachForm.css";

import G0 from "../../../main_assets/game_logos/game0.png";
import G1 from "../../../main_assets/game_logos/game1.png";
import G2 from "../../../main_assets/game_logos/game2.png";

import A0 from "../../../main_assets/avatars/avatar0.png";
import A1 from "../../../main_assets/avatars/avatar1.png";
import A2 from "../../../main_assets/avatars/avatar2.png";
import A3 from "../../../main_assets/avatars/avatar3.png";
import A4 from "../../../main_assets/avatars/avatar4.png";
import A5 from "../../../main_assets/avatars/avatar5.png";
import A6 from "../../../main_assets/avatars/avatar6.png";
import A7 from "../../../main_assets/avatars/avatar7.png";
import A8 from "../../../main_assets/avatars/avatar8.png";
import A9 from "../../../main_assets/avatars/avatar9.png";

class CoachForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      username: "",
      password: "",
      game: null,
      dscrptn: "",
      rate: 0,
      avatar: null
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
    console.log(this.state);
  };

  handleCheck = e => {
    var a = e.target.id;
    this.setState({
      game: a
    });
    console.log(this.state);
  };

  handleAvatar = e => {
    var a = e.target.id;
    this.setState({
      avatar: a
    });

    console.log(this.state);
  };

  handleSubmit = e => {
    var user = firebase.auth().currentUser;
    var credentials = firebase.auth.EmailAuthProvider.credential(
      this.state.username,
      this.state.password
    );
    e.preventDefault();
    if (user) {
      user
        .reauthenticateAndRetrieveDataWithCredential(credentials)
        .then(() => {
          var db = firebase.firestore();
          db.collection("coaches")
            .doc(this.state.username)
            .set({
              name: this.state.name,
              email: this.state.username,
              game: this.state.game,
              description: this.state.dscrptn,
              rate: this.state.rate,
              avatar: this.state.avatar
            })
            .then(() => {
              return <Redirect to="/fantasy" />;
            });
        })
        .catch(error => {
          alert(error.message);
        });
    } else {
      alert("You need to login first.");
    }
  };

  render() {
    return (
      <div className="coach-form-super-container">
        <form className="coach-form-container" onSubmit={this.handleSubmit}>
          <div>
            <input
              type="text"
              name=""
              id="name"
              className="cred-inputs"
              placeholder="Full Name"
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <input
              type="text"
              name=""
              id="username"
              className="cred-inputs"
              placeholder="Username"
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <input
              type="password"
              name=""
              id="password"
              className="cred-inputs"
              placeholder="Password"
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <input
              type="number"
              name=""
              id="rate"
              className="rate-input"
              placeholder="Rate"
              onChange={this.handleChange}
              required
            />
            {"  "}
            /hr
          </div>
          <div>
            <textarea
              name=""
              id="dscrptn"
              className="dsc-inputs"
              placeholder="Description"
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <label className="avatar-label" htmlFor="avatar0">
              <input
                type="radio"
                value="avatar0"
                name="avatar"
                id="avatar0"
                className="avatar"
                label="avatar0"
                onChange={this.handleAvatar}
              />
              <img src={A0} className="avatar-image" alt="" />
            </label>
            <label className="avatar-label" htmlFor="avatar1">
              <input
                type="radio"
                value="avatar1"
                name="avatar"
                id="avatar1"
                className="avatar"
                label="avatar1"
                onChange={this.handleAvatar}
              />
              <img src={A1} className="avatar-image" alt="" />
            </label>
            <label className="avatar-label" htmlFor="avatar2">
              <input
                type="radio"
                value="avatar2"
                name="avatar"
                id="avatar2"
                className="avatar"
                label="avatar2"
                onChange={this.handleAvatar}
              />
              <img src={A2} className="avatar-image" alt="" />
            </label>
            <label className="avatar-label" htmlFor="avatar3">
              <input
                type="radio"
                value="avatar3"
                name="avatar"
                id="avatar3"
                className="avatar"
                label="avatar3"
                onChange={this.handleAvatar}
              />
              <img src={A3} className="avatar-image" alt="" />
            </label>
            <label className="avatar-label" htmlFor="avatar4">
              <input
                type="radio"
                value="avatar4"
                name="avatar"
                id="avatar4"
                className="avatar"
                label="avatar4"
                onChange={this.handleAvatar}
              />
              <img src={A4} className="avatar-image" alt="" />
            </label>
            <label className="avatar-label" htmlFor="avatar5">
              <input
                type="radio"
                value="avatar5"
                name="avatar"
                id="avatar5"
                className="avatar"
                label="avatar5"
                onChange={this.handleAvatar}
              />
              <img src={A5} className="avatar-image" alt="" />
            </label>
            <label className="avatar-label" htmlFor="avatar6">
              <input
                type="radio"
                value="avatar6"
                name="avatar"
                id="avatar6"
                className="avatar"
                label="avatar6"
                onChange={this.handleAvatar}
              />
              <img src={A6} className="avatar-image" alt="" />
            </label>
            <label className="avatar-label" htmlFor="avatar7">
              <input
                type="radio"
                value="avatar7"
                name="avatar"
                id="avatar7"
                className="avatar"
                label="avatar7"
                onChange={this.handleAvatar}
              />
              <img src={A7} className="avatar-image" alt="" />
            </label>
            <label className="avatar-label" htmlFor="avatar8">
              <input
                type="radio"
                value="avatar8"
                name="avatar"
                id="avatar8"
                className="avatar"
                label="avatar8"
                onChange={this.handleAvatar}
              />
              <img src={A8} className="avatar-image" alt="" />
            </label>
            <label className="avatar-label" htmlFor="avatar9">
              <input
                type="radio"
                value="avatar9"
                name="avatar"
                id="avatar9"
                className="avatar"
                label="avatar9"
                onChange={this.handleAvatar}
              />
              <img src={A9} className="avatar-image" alt="" />
            </label>
          </div>
          <div className="check-game">
            <label className="game-label" htmlFor="dota">
              <input
                type="radio"
                value="dota"
                name="game"
                id="dota"
                label="dota"
                onChange={this.handleCheck}
                className="game"
              />
              <img src={G0} className="game-image" alt="" />
            </label>
            <label className="game-label" htmlFor="overwatch">
              <input
                type="radio"
                value="overwatch"
                name="game"
                id="overwatch"
                label="overwatch"
                onChange={this.handleCheck}
                className="game"
              />
              <img src={G1} className="game-image1" alt="" />
            </label>
            <label className="game-label" htmlFor="csgo">
              <input
                type="radio"
                value="csgo"
                name="game"
                id="csgo"
                label="csgo"
                onChange={this.handleCheck}
                className="game"
              />
              <img src={G2} className="game-image1" alt="" />
            </label>
          </div>
          <div>
            <button className="coach-form-button">Become a Coach</button>
          </div>
        </form>
      </div>
    );
  }
}

export default CoachForm;
