import React, { Component } from "react";
import firebase from "firebase";

class UpdateUserScore extends Component {
  state = {};

  componentWillMount() {
    console.log("this");
    var db = firebase.firestore();
    // var matches = db.collection('weeks');
    db.collection("user")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          var userData = doc.data();
          var oldScore = userData.score;
          console.log(oldScore);
        });
      });
  }

  render() {
    return <div />;
  }
}

export default UpdateUserScore;
