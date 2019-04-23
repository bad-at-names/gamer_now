import React, { Component } from "react";
import firebase from "firebase";
import "./SlotCard.css";

class SlotCard extends Component {
  state = {
    pId: this.props.pId,
    pImgUrl: "",
    pName: "",
    pRole: ""
  };

  componentWillReceiveProps() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        // User is signed in.
        var db = firebase.firestore();
        db.collection("players")
          .doc(this.props.pId)
          .onSnapshot(doc => {
            this.pData = doc.data();
            this.setState({
              pId: this.props.pId,
              pImgUrl: this.pData.headshotUrl,
              pName: this.pData.playerName,
              pRole: this.pData.role
            });
          });
      } else {
      }
    });
  }

  componentWillUnmount() {
    this.setState({
      pId: this.props.pId,
      pImgUrl: "",
      pName: "",
      pRole: ""
    });
  }

  cardColor = pRole => {
    switch (pRole) {
      case "offense":
        return "card-red";
      case "support":
        return "card-green";
      case "tank":
        return "card-blue";
      default:
        return "card-grey";
    }
  };

  render() {
    return (
      <div className={this.cardColor(this.state.pRole)}>
        <img src={this.state.pImgUrl} alt="" className="player-image" />
        <h6>{this.state.pName}</h6>
      </div>
    );
  }
}

export default SlotCard;
