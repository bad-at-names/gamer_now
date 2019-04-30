import React, { Component } from "react";
// import "./CoachCard.css";

class Post extends Component {
  render() {
    return (
      <div className="card">
        <div className="content">
          <h2>
            <b>{this.props.post.title}</b>
          </h2>
          <hr />
          <p>{this.props.post.content}</p>
          <div className="booking-button">
            <button>Reply</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;