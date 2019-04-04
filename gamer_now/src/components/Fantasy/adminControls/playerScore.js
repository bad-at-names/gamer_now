import React, { Component } from "react";
import firebase from "firebase";
import axios from "axios";

class PlayerScore extends Component {
  state = {
    endpoints: []
  };

  componentDidMount() {
    console.log("this");
    var db = firebase.firestore();
    // var matches = db.collection('weeks');
    db.collection("weeks")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          // doc.data() is never undefined for query doc snapshots
          var matchData = doc.data();
          var dmg, heal, elim, deaths, def, score, pData;
          var matchURLs =
            "https://api.overwatchleague.com/stats/matches/" +
            matchData.matchId.toString() +
            "/maps/" +
            matchData.mapCount.toString();
          axios
            .get(matchURLs)
            .catch(err => {
              console.log(err);
            })
            .then(res => {
              console.log(res.data.teams);
              console.log(res.data.teams[0].players);
              res.data.teams[0].players.forEach(player => {
                console.log(player.esports_player_id.toString());
                console.log(player.stats);
                dmg = 0;
                elim = 0;
                deaths = 0;
                heal = 0;
                def = 0;
                player.stats.forEach(gameVal => {
                  console.log(gameVal);
                  switch (gameVal.name) {
                    case "damage":
                      dmg = gameVal.value;
                      break;
                    case "eliminations":
                      elim = gameVal.value;
                      break;
                    case "deaths":
                      deaths = gameVal.value;
                      break;
                    case "healing":
                      heal = gameVal.value;
                      break;
                    default:
                      def = gameVal.value;
                  }
                });

                score =
                  (dmg * 0.001 + elim * 1 - deaths * 3 + heal * 0.0015) / 4;

                // db.collection("players")
                //   .doc(player.esports_player_id.toString())
                //   .onSnapshot(doc => {
                //     pData = doc.data();
                //     score = pData.score;
                //   });

                var updateDb = db
                  .collection("players")
                  .doc(player.esports_player_id.toString());
                updateDb
                  .update({
                    weekScore: score
                  })
                  .catch(err => {
                    console.log(err);
                  });
                console.log(
                  score,
                  " ==>> ",
                  player.esports_player_id.toString()
                );
              });

              console.log(res.data.teams[1].players);
              res.data.teams[1].players.forEach(player => {
                console.log(player.esports_player_id.toString());
                console.log(player.stats);
                dmg = 0;
                elim = 0;
                deaths = 0;
                heal = 0;
                def = 0;
                player.stats.forEach(gameVal => {
                  console.log(gameVal);
                  switch (gameVal.name) {
                    case "damage":
                      dmg = gameVal.value;
                      break;
                    case "eliminations":
                      elim = gameVal.value;
                      break;
                    case "deaths":
                      deaths = gameVal.value;
                      break;
                    case "healing":
                      heal = gameVal.value;
                      break;
                    default:
                      def = gameVal.value;
                  }
                });
                score =
                  (dmg * 0.001 + elim * 1 - deaths * 3 + heal * 0.0015) / 4;
                // db.collection("players")
                //   .doc(player.esports_player_id.toString())
                //   .onSnapshot(doc => {
                //     pData = doc.data();
                //     score = pData.score;
                //   });

                var updateDb = db
                  .collection("players")
                  .doc(player.esports_player_id.toString());
                updateDb
                  .update({
                    weekScore: score
                  })
                  .catch(err => {
                    console.log(err);
                  });
                console.log(
                  score,
                  " ==>> ",
                  player.esports_player_id.toString()
                );
              });
            });
        });
      });
  }

  render() {
    return <div>"this worked"</div>;
  }
}

export default PlayerScore;
