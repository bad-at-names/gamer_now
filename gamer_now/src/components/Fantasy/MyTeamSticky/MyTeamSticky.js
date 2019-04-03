import React, { Component } from "react";
import { Link } from "react-router-dom";
import firebase from "firebase";
import "./MyTeamSticky.css";
import EmptyPlayerSlot from "../../../main_assets/emptyPlayerSlot.png";
import SlotCard from "../SlotCards/SlotCard";

class MyTeamSticky extends Component {
  state = {
    email: "",
    players: [null, null, null, null, null, null],
    score: 0
  };

  email = null;
  uData = null;
  uTeam = [];

  componentWillMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        // User is signed in.

        user.providerData.forEach(profile => {
          this.email = profile.email;
        });

        var db = firebase.firestore();
        db.collection("users")
          .doc(this.email)
          .onSnapshot(doc => {
            this.uData = doc.data();
            this.setState({
              players: this.uData.player,
              score: this.uData.score
            });
          });
      } else {
      }
    });
  }

  render() {
    return (
      <div className="my-team-sticky-container">
        Your Players:
        <Link to="./playerinfo">
          <SlotCard pId={this.state.players[0]} />
        </Link>
        <Link to="./playerinfo">
          <SlotCard pId={this.state.players[1]} />
        </Link>
        <Link to="./playerinfo">
          <SlotCard pId={this.state.players[2]} />
        </Link>
        <Link to="./playerinfo">
          <SlotCard pId={this.state.players[3]} />
        </Link>
        <Link to="./playerinfo">
          <SlotCard pId={this.state.players[4]} />
        </Link>
        <Link to="./playerinfo">
          <SlotCard pId={this.state.players[5]} />
        </Link>
        <span>Score: {this.state.score}</span>
      </div>
    );
  }
}

export default MyTeamSticky;
