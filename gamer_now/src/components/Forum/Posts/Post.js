import React, { Component } from "react";
import { Redirect } from "react-router-dom";
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
    if (user) {
    } else {
      return <Redirect to="./" />;
    }
  }

  render() {
    return <div>{this.props.props.title}</div>;
  }
}
export default Post;
