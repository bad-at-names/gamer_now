import React, { Component } from "react";
import firebase from "firebase";
import axios from "axios";

class PlayerScore extends Component {
  state = {
    endpoints: []
  };

  render() {
    console.log("this");
    var db = firebase.firestore();
    // var matches = db.collection('weeks');
    db.collection("weeks").get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            axios.get("https://api.overwatchleague.com/stats/matches"+doc.id.toString()+"maps"+doc.data.mapCount.toString()).then(
                console.log("hi")
            )
        });
    });
    return <div>"this worked"</div>
  }
}

export default PlayerScore;
