import React, { Component } from 'react';
import { avatar } from '../../layout/Frequents/Avatars';
import firebase from 'firebase';
import gameLogo from '../../layout/Frequents/gameLogo';
import './CoachCard.css';

class CoachCard extends Component {
	handleClick = e => {
		e.preventDefault();
		alert('An email has been sent to the coach. Please wait for the coach to respond.');
	};
	render() {
		return (
			<div className="card">
				<div className="coach-img-container">
					<img src={avatar(this.props.coach.avatar)} alt="" className="coach-img" />
				</div>
				<div className="content">
					<h2>
						<b>{this.props.coach.name}</b>
					</h2>
					<hr />
					<img src={gameLogo(this.props.coach.game)} alt="" className="game-logo" />
					<p>{this.props.coach.description}</p>
					<div className="booking-button" onClick={this.handleClick}>
						<p>Book Coach</p>
						<button>${this.props.coach.rate}/hr</button>
					</div>
				</div>
			</div>
		);
	}
}

export default CoachCard;
