import React, { Component } from "react";
import firebase from "firebase";

class UpdateUserScore extends Component {
  state = {};

  componentDidMount() {
    console.log("this");
    var db = firebase.firestore();
    // var matches = db.collection('weeks');
    db.collection("users")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          var userData = doc.data();
          var oldScore = userData.score;
          var score;
          userData.player.forEach(pId => {
            db.collection("players")
              .doc(pId.toString())
              .get()
              .then(res => {
                var asdf = res.data();
                console.log(asdf.weekScore);
                oldScore = oldScore + asdf.weekScore;
                db.collection("users")
                  .doc(userData.email)
                  .update({
                    score: oldScore
                  })
                  .then(() => {
                    console.log(userData.email, "successful", oldScore);
                  });
              });
          });
        });
      });
  }

  render() {
    return <div />;
  }
}

export default UpdateUserScore;
