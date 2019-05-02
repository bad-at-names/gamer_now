import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import firebase from "firebase";
import "./NewPost.css";

class NewPostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      question: "",
      username: "",
      password: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
    console.log(this.state);
  };

  handleSubmit = e => {
    var success = true;
    var user = firebase.auth().currentUser;
    var credentials = firebase.auth.EmailAuthProvider.credential(
      this.state.username,
      this.state.password
    );
    e.preventDefault();
    if (user) {
      user
        .reauthenticateAndRetrieveDataWithCredential(credentials)
        .then(() => {
          var time = new Date();
          var timeStamp = time.getTime();
          var db = firebase.firestore();
          db.collection("posts")
            .doc(user.uid + "_" + timeStamp.toString())
            .set({
              title: this.state.title,
              email: this.state.username,
              question: this.state.question,
              timestamp: timeStamp,
              comments: []
            });
        })
        .catch(error => {
          if (error === null) {
            success = false;
          }
        });
    } else {
      alert("You need to login first.");
    }
    if (success) {
      this.setState({
        success: true
      });
    }
  };

  render() {
    var user = firebase.auth().currentUser;
    if (!this.state.success && user) {
      return (
        <div className="coach-form-super-container">
          <form className="coach-form-container" onSubmit={this.handleSubmit}>
            <div>
              <input
                type="text"
                name=""
                id="title"
                className="cred-inputs"
                placeholder="Title"
                onChange={this.handleChange}
                required
              />
            </div>

            <div>
              <textarea
                name=""
                id="question"
                className="dsc-inputs"
                placeholder="question"
                onChange={this.handleChange}
                required
              />
            </div>
            <div>
              <input
                type="text"
                name=""
                id="username"
                className="cred-inputs"
                placeholder="Username"
                onChange={this.handleChange}
                required
              />
            </div>
            <div>
              <input
                type="password"
                name=""
                id="password"
                className="cred-inputs"
                placeholder="Password"
                onChange={this.handleChange}
                required
              />
            </div>
            <div>
              <button className="coach-form-button">Post</button>
            </div>
          </form>
        </div>
      );
    } else {
      return <Redirect to="./forum" />;
    }
  }
}

export default NewPostForm;
