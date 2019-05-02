import React, { Component } from "react";
import firebase from "firebase";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      user: "",
      coach: false
    };
    var user = firebase.auth().currentUser;
    var db = firebase.firestore();
    db.collection("posts")
    .get(this.props.postId)
    if (user) {
    }
  }
  render() {
    return <div>{this.props.title}</div>;
  }
}
export default Post;
