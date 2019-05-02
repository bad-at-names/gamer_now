import React, { Component } from "react";
import { Link } from "react-router-dom";
// import "./CoachCard.css";
import "./PostCard.css";

class PostCard extends Component {
  render() {
    return (
      <div className="forum-card">
        <div className="card-content">
          <h2 className="post-title">
            <b>{this.props.post.title}</b>
          </h2>
          <hr />
          <div className="post-content">{this.props.post.question}</div>
        </div>
      </div>
    );
  }
}

export default PostCard;
