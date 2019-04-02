import React, { Component } from "react";
import firebase from "firebase";
import { connect } from "react-redux";

class AddPlayer extends Component {
  state = {
    email: "",
    players: []
  };

  email = null;
  uData = null;
  uTeam = [null, null, null, null, null, null];

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
            this.uTeam = this.uData.player;
          });
      } else {
      }
    });
  }

  addPlayerHandler = i => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        // User is signed in.
        var db = firebase.firestore();

        if (!this.uTeam.includes(this.props.playerId)) {
          this.uTeam[i] = this.props.playerId;
          var updateTeam = db.collection("users").doc(this.email);
          console.log(this.uTeam);
          updateTeam.update({
            player: this.uTeam
          });
        }
      } else {
        // No user is signed in.
      }
    });
  };

  render() {
    return (
      <div className="add-buttons">
        <button
          onClick={() => {
            this.addPlayerHandler(0);
          }}
          className="add-buttons"
        >
          1
        </button>
        <button
          onClick={() => {
            this.addPlayerHandler(1);
          }}
          className="add-buttons"
        >
          2
        </button>
        <button
          onClick={() => {
            this.addPlayerHandler(2);
          }}
          className="add-buttons"
        >
          3
        </button>
        <button
          onClick={() => {
            this.addPlayerHandler(3);
          }}
          className="add-buttons"
        >
          4
        </button>
        <button
          onClick={() => {
            this.addPlayerHandler(4);
          }}
          className="add-buttons"
        >
          5
        </button>
        <button
          onClick={() => {
            this.addPlayerHandler(5);
          }}
          className="add-buttons"
        >
          6
        </button>
      </div>
    );
  }
}

export default AddPlayer;
