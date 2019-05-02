import React, { Component } from "react";
import ReactModal from 'react-modal';
import firebase from 'firebase';
// import "./CoachCard.css";
import "./post.css";

class Post extends Component {
  constructor () {
    super();
    this.state = {
      showModal: false,
      comment: ''
    };
    
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
    console.log(this.state);
  };

  handleSubmit = e => {
    e.preventDefault();
    var time = new Date();
    var ctimeStamp = time.getTime();
    var db = firebase.firestore();
    db.collection("posts")
      .doc(this.props.user.uid + "_" + ctimeStamp.toString())
      .set({
        ctimestamp: ctimeStamp,
        comments: []
      });
  }

  handleOpenModal () {
    this.setState({ showModal: true });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
  }
  
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
            <button onClick={this.handleOpenModal}>Reply</button>
            <ReactModal 
              isOpen={this.state.showModal}
              contentLabel="Comment modal">
              <form onSubmit={this.handleSubmit}>
                <button onClick={this.handleCloseModal}>X</button>
                <p>Leave a comment</p>
                <textarea id="comment" />
                <button>Leave a comment</button>
              </form>
            </ReactModal>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
