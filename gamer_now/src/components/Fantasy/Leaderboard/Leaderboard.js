import React, { Component } from "react";
import firebase from "firebase";

import "./Leaderboard.css";

class Leaderboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userCol: [],
      isLoaded: false
    };
    var db = firebase.firestore();
    this.userC = [];
    db.collection("users")
      .orderBy("score", "desc")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          var userData = doc.data();
          this.userC.push([userData.email, userData.score.toFixed(2)]);
        });
      })
      .then(() => {
        this.setState({
          isLoaded: true
        });
      });
    console.log("constructor", this.state.userCol);
  }

  componentDidMount() {
    this.setState({
      userCol: this.userC
    });
    console.log("mount", this.state.isLoaded);
  }

  componentDidUpdate() {
    console.log("update", this.state.userCol);
    if (this.state.userCol) {
      for (let i = 0; i < this.state.userCol.length; i++) {
        // console.log("update", this.state.userCol);
        console.log(
          this.state.userCol[i][0],
          "===>>>",
          this.state.userCol[i][1]
        );
      }
    }
  }

  render() {
    const { userCol } = this.state;
    const userList = userCol.length ? (
      userCol.map(user => {
        return (
          <div className="leaderboard-component">
            <span className="left-span">{user[0]}</span>{" "}
            <span className="right-span">{user[1]}</span>
          </div>
        );
      })
    ) : (
      <div> Loading... </div>
    );
    return <div className="leaderboard-container">{userList}</div>;
  }
}

export default Leaderboard;
