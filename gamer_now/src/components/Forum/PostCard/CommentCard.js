import React, { Component } from 'react';
import firebase from 'firebase';
import { avatar } from '../../layout/Frequents/Avatars';
import './CommentCard.css';

class CommentCard extends Component {
	constructor(props) {
		super(props);
		this.date = new Date(this.props.post.time);
	}

	render() {
		if (this.props.post.isCoach) {
			return (
				<div className="comment-card-gold">
					<div className="comment-col-1">
						<img src={avatar(this.props.post.avatar)} alt="" className="comment-avatars" />
						<div>
							<h4>{this.props.post.commentOwner}</h4>
							<div>{this.date.toString().slice(0, 21)}</div>
						</div>
					</div>
					<p>{this.props.post.commentBody}</p>
				</div>
			);
		} else {
			return (
				<div className="comment-card">
					<div className="comment-col-1">
						<img src={avatar(this.props.post.avatar)} alt="" className="comment-avatars" />
						<div>
							<h4>{this.props.post.commentOwner}</h4>
							<div>{this.date.toString().slice(0, 21)}</div>
						</div>
					</div>
					<p>{this.props.post.commentBody}</p>
				</div>
			);
		}
	}
}

export default CommentCard;
