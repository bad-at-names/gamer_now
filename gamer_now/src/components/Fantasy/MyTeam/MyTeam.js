import React, { Component } from "react";
import { Link } from "react-router-dom";
import firebase from "firebase";
import "./MyTeam.css";
import EmptyPlayerSlot from "../../../main_assets/emptyPlayerSlot.png";

class MyTeam extends Component {
  state = {
    email: "",
    players: [null, null, null, null, null, null],
    pId: 0
  };

  email = null;
  uData = null;

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
            this.state.players = this.uData.player;
          });
      } else {
      }
    });
  }

  Slot = i => {
    if (this.state.players[i] !== null) {
      return <div>{this.state.players[i]}</div>;
    } else {
      return (
        <Link to="/playerinfo">
          <img src={EmptyPlayerSlot} alt="" className="player-slot" />
        </Link>
      );
    }
  };

  componentDidMount() {
    console.log(this.state);
  }

  render() {
    return (
      <div className="my-team-container">
        Your Players:
        {this.Slot(0)}
        {this.Slot(1)}
        {this.Slot(2)}
        {this.Slot(3)}
        {this.Slot(4)}
        {this.Slot(5)}
      </div>
    );
  }
}

export default MyTeam;
