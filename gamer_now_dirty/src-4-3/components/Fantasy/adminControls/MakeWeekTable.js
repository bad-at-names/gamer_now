import React, { Component } from "react";
import firebase from "firebase";

class MakeWeekTable extends Component {
  state = {
    matches: []
  };

  componentWillMount() {
    const OverwatchLeague = require('overwatchleague');
    const OWL = new OverwatchLeague();
    OWL.getConcludedWeek().then(response => {
        this.setState({
            matches: response.data
        })
    })
  }

  render() {
    console.log("this");
    const { matches } = this.state;
    const matchList = matches.length ? (
      matches.map(match => {
        console.log(match);
        var db = firebase.firestore();
        db.collection("weeks")
          .doc(match.id.toString())
          .set({
            matchId: match.id,
            mapCount: match.games.length
          });
      })
    ) : (
      <div />
    );
    return <div>{matchList}</div>;
  }
}

export default MakeWeekTable;
