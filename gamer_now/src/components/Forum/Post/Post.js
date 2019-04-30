import React, { Component } from "react";
// import "./CoachCard.css";
import "./Post.css";

class Post extends Component {
  render() {
    return (
      <div className="forum-card">
        <div className="card-content">
          <h2 className="post-title">
            <b>{this.props.post.title}</b>
          </h2>
          <hr />
          <div className="post-content">{this.props.post.question}</div>
          <div className="booking-button">
            <button>Reply</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
