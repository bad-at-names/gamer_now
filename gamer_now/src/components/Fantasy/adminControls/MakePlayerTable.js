import React, { Component } from "react";
import firebase from "firebase";
import axios from "axios";

class MakePlayerTable extends Component {
  state = {
    players: []
  };

  componentWillMount() {
    axios.get("https://api.overwatchleague.com/players").then(res => {
      this.setState({
        players: res.data.content
      });
    });
  }

  render() {
    const { players } = this.state;
    const playerList = players.length ? (
      players.map(player => {
        console.log("this");
        var db = firebase.firestore();
        db.collection("players")
          .doc(player.id.toString())
          .set({
            playerName: player.name,
            playerId: player.id,
            headshotUrl: player.headshot,
            role: player.attributes.role,
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
