import React, { Component } from "react";

class CommentCard extends Component {
  constructor(props) {
    super(props);
    this.date = new Date(this.props.post.time);
    console.log(this.date);
  }

  render() {
    return (
      <div>
        <div>{this.props.post.commentOwner}</div>
        <div>{this.date.toString()}</div>
        <h4>{this.props.post.commentBody}</h4>
      </div>
    );
  }
}

export default CommentCard;
