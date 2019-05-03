import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import firebase from "firebase";
import Post from "../Posts/Post";
import CommentCard from "./CommentCard";
// import "./CoachCard.css";
import "./PostCard.css";

class PostCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      comment: ""
    };
  }

  componentDidMount() {
    var s = this.state.comments;
    var db = firebase.firestore();
    db.collection("posts")
      .doc(this.props.post.postId)
      .collection("comments")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          s.push(doc.data());
        });
        this.setState({
          comments: s
        });
      });
  }

  handleSubmitComment = e => {
    e.preventDefault();
    var user = firebase.auth().currentUser;
    var db = firebase.firestore();

    var time = new Date();
    var timestamp = time.getTime();

    db.collection("posts")
      .doc(this.props.post.postId)
      .collection("comments")
      .doc(timestamp.toString())
      .set({
        id: user.email + "__" + timestamp.toString(),
        commentBody: this.state.comment,
        commentOwner: user.email,
        time: timestamp,
        isCoach: true
      });
    console.log(this.state.comments);
  };

  render() {
    const { comments } = this.state;
    const commentList = comments.length ? (
      comments.map(comm => {
        return <CommentCard post={comm} key={comm.id} />;
      })
    ) : (
      <div />
    );
    return (
      <div className="forum-card">
        <Post props={this.props.post} />
        <div className="card-content">
          <h2 className="post-title">
            <b>{this.props.post.title}</b>
          </h2>
          <hr />
          <div className="post-content">{this.props.post.question}</div>
        </div>
        {commentList}
        <form onSubmit={this.handleSubmitComment}>
          <textarea
            onChange={this.handleChange}
            placeholder="Enter comment here"
            id="comment"
          />
          <button onSubmit={this.handleSubmitComment}>Submit</button>
        </form>
      </div>
    );
  }
}

export default PostCard;
