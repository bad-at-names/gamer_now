import React, { Component } from "react";
import firebase from "firebase";
import axios from "axios";

class MakePlayerTable extends Component {
  state = {
    players: []
  };

  componentWillMount() {
    axios.get("https://api.overwatchleague.com/stats/players").then(res => {
      this.setState({
        players: res.data.data
      });
    });
  }

  render() {
    console.log("this");
    const { players } = this.state;
    const playerList = players.length ? (
      players.map(player => {
        console.log("this");
        var db = firebase.firestore();
        db.collection("players")
          .doc(player.playerId.toString())
          .set({
            playerName: player.name,
            playerId: player.playerId,
            weekScore: 0
          });
      })
    ) : (
      <div />
    );
    return <div>{playerList}</div>;
  }
}

export default MakePlayerTable;
