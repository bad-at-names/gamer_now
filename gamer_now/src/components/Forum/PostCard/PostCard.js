import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import firebase from 'firebase';
import { avatar } from '../../layout/Frequents/Avatars';
import CommentCard from './CommentCard';
// import "./CoachCard.css";
import './PostCard.css';

class PostCard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			comments: [],
			comment: ''
		};
	}

	componentDidMount() {
		var s = this.state.comments;
		var db = firebase.firestore();
		db.collection('posts')
			.doc(this.props.post.postId)
			.collection('comments')
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

	handleChange = e => {
		this.setState({
			comment: e.target.value
		});
		console.log(this.state);
	};

	handleSubmitComment = e => {
		e.preventDefault();
		var user = firebase.auth().currentUser;
		if (user) {
			var db = firebase.firestore();

			var time = new Date();
			var timestamp = time.getTime();

			var dat;
			var dbRef = db.collection('users').doc(user.email);
			dbRef.get().then(doc => {
				dat = doc.data();
				var dName = dat.name;
				var dIsCoach = dat.isCoach;

				db.collection('posts')
					.doc(this.props.post.postId)
					.collection('comments')
					.doc(timestamp.toString())
					.set({
						id: user.email + '__' + timestamp.toString(),
						commentBody: this.state.comment,
						commentOwner: dName,
						time: timestamp,
						isCoach: dIsCoach
					});
				var p = {
					id: user.email + '__' + timestamp.toString(),
					commentBody: this.state.comment,
					commentOwner: dName,
					time: timestamp,
					isCoach: dIsCoach
				};
				var prevComments = this.state.comments;
				prevComments.push(p);
				this.setState({
					comments: prevComments
				});
			});
		}
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
				<div className="card-content">
					<div className="post-title">
						<img src={avatar(this.props.post.avatar)} className="post-avatar" alt="" />
						<div>
							<div>{this.props.post.name}</div>
							<b>{this.props.post.title}</b>
						</div>
					</div>
					<hr />
					<div className="post-content">{this.props.post.question}</div>
					<div className="booking-button">
						<form onSubmit={this.handleSubmitComment}>
							<p>Leave a comment</p>
							<textarea id="comment" onChange={this.handleChange} />
							<button onSubmit={this.handleSubmitComment}>Leave a comment</button>
						</form>
					</div>
				</div>
				{commentList}
			</div>
		);
	}
}

export default PostCard;
