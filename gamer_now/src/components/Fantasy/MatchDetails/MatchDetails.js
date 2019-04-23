import React, { Component } from "react";
import firebase from "firebase";
import mapIcon from "../../layout/Frequents/mapIcon";
import "./MatchDetails.css";

class MatchDetails extends Component {
  state = {
    rows: []
  };

  // var rows = [];

  componentWillMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        // User is signed in.

        user.providerData.forEach(profile => {
          this.email = profile.email;
        });

        var db = firebase.firestore();
        db.collection("users")
          .get()
          .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
              // doc.data() is never undefined for query doc snapshots
              console.log(doc.id, " => ", doc.data().score);
              // var rows = this.state.rows
              // rows.push(doc.data().score)
              // this.setStete({rows: rows})
            });
          });
      } else {
      }
    });
  }
  render() {
    if (this.props.matchId === "Loading") {
      return (
        <div className="match-detail-container">
          {console.log(this.props.matchId)}
          <h3 className="no-break">
            Select A Match on the Left to view Details
          </h3>
        </div>
      );
    } else {
      const mapsPlayed = this.props.matchId.games;
      var mapName;
      const mapList = mapsPlayed.length ? (
        mapsPlayed.map(maps => {
          mapName = maps.name;
          return (
            <div className="game-list" key={maps.id}>
              {console.log(maps)}
              <h3 className="team-game-score">
                {maps.attributes.mapScore.team1}
              </h3>
              <div className="map-pic-container">
                <img
                  src={mapIcon(
                    maps.attributes.map
                      ? maps.attributes.map
                      : maps.attributes.mapGuid === "0x0800000000000871"
                      ? "rialto"
                      : "busan"
                  )}
                  className="map-pic"
                  alt=""
                />
              </div>
              <h3 className="team-game-score">
                {maps.attributes.mapScore.team2}
              </h3>
            </div>
          );
        })
      ) : (
        <div>Loading ...</div>
      );

      return (
        <div className="match-detail-container">
          <h3 className="game-list">
            <h3 className="team-game-score">
              {this.props.matchId.competitors[0].name}
            </h3>
            <h3 className="map-pic-container">
              {this.props.matchId.scores[0].value} VS{" "}
              {this.props.matchId.scores[1].value}
            </h3>
            <h3 className="team-game-score">
              {this.props.matchId.competitors[1].name}
            </h3>
          </h3>
          {mapList}
        </div>
      );
    }
  }
}

export default MatchDetails;
