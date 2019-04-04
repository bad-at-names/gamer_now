import React, { Component } from "react";
import { Link } from "react-router-dom";
import firebase from "firebase";
import "./MyTeam.css";
import SlotCard from "../SlotCards/SlotCard";

class MyTeam extends Component {
  state = {
    email: "",
    players: [8746, 8746, 8746, 8746, 8746, 8746],
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
      <div className="my-team-container">
        Your Players:
        <Link to="./playerinfo">
          <SlotCard pId={this.state.players[0].toString()} />
        </Link>
        <Link to="./playerinfo">
          <SlotCard pId={this.state.players[1].toString()} />
        </Link>
        <Link to="./playerinfo">
          <SlotCard pId={this.state.players[2].toString()} />
        </Link>
        <Link to="./playerinfo">
          <SlotCard pId={this.state.players[3].toString()} />
        </Link>
        <Link to="./playerinfo">
          <SlotCard pId={this.state.players[4].toString()} />
        </Link>
        <Link to="./playerinfo">
          <SlotCard pId={this.state.players[5].toString()} />
        </Link>
        Score: {this.state.score}
      </div>
    );
  }
}

export default MyTeam;
