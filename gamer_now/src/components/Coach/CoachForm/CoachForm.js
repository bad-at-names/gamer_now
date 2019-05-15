import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import firebase from 'firebase';
import './CoachForm.css';

import G0 from '../../../main_assets/game_logos/game0.png';
import G1 from '../../../main_assets/game_logos/game1.png';
import G2 from '../../../main_assets/game_logos/game2.png';

class CoachForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			game: null,
			dscrptn: '',
			rate: 0,
			success: false
		};
	}

	handleChange = e => {
		this.setState({
			[e.target.id]: e.target.value
		});
		console.log(this.state);
	};

	handleCheck = e => {
		var a = e.target.id;
		this.setState({
			game: a
		});
		console.log(this.state);
	};

	handleSubmit = e => {
		var success = true;
		var user = firebase.auth().currentUser;
		var credentials = firebase.auth.EmailAuthProvider.credential(
			this.state.email,
			this.state.password
		);
		e.preventDefault();
		if (user) {
			user
				.reauthenticateAndRetrieveDataWithCredential(credentials)
				.then(() => {
					var db = firebase.firestore();

					db.collection('users')
						.doc(this.state.email)
						.get()
						.then(doc => {
							var dat = doc.data();

							db.collection('coaches')
								.doc(this.state.email)
								.set({
									name: dat.name,
									uid: user.uid,
									email: this.state.email,
									game: this.state.game,
									description: this.state.dscrptn,
									rate: this.state.rate,
									stars: 0
								});
							db.collection('users')
								.doc(this.state.email)
								.update({
									isCoach: true
								});
						});
				})
				.catch(error => {
					// if (error === null) {
					// 	success = false;
					// }
				});
		} else {
			alert('You need to login first.');
		}
		if (success) {
			this.setState({
				success: true
			});
		}
	};

	render() {
		if (!this.state.success) {
			return (
				<div className="coach-form-super-container">
					<form className="coach-form-container" onSubmit={this.handleSubmit}>
						<div>
							<input
								type="text"
								name=""
								id="email"
								className="cred-inputs"
								placeholder="Email"
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
							${'   '}
							<input
								type="number"
								name=""
								id="rate"
								className="rate-input"
								placeholder="Rate"
								onChange={this.handleChange}
								required
							/>
							{'  '}
							/hr
						</div>
						<div>
							<textarea
								name=""
								id="dscrptn"
								className="dsc-inputs"
								placeholder="Description"
								onChange={this.handleChange}
								required
							/>
						</div>
						<div />
						<div className="check-game">
							<label className="game-label" htmlFor="dota">
								<input
									type="radio"
									value="dota"
									name="game"
									id="dota"
									label="dota"
									onChange={this.handleCheck}
									className="game"
								/>
								<img src={G0} className="game-image" alt="" />
							</label>
							<label className="game-label" htmlFor="overwatch">
								<input
									type="radio"
									value="overwatch"
									name="game"
									id="overwatch"
									label="overwatch"
									onChange={this.handleCheck}
									className="game"
								/>
								<img src={G1} className="game-image1" alt="" />
							</label>
							<label className="game-label" htmlFor="csgo">
								<input
									type="radio"
									value="csgo"
									name="game"
									id="csgo"
									label="csgo"
									onChange={this.handleCheck}
									className="game"
								/>
								<img src={G2} className="game-image1" alt="" />
							</label>
						</div>
						<div>
							<a href="https://connect.stripe.com/oauth/authorize?response_type=code&amp;client_id=ca_E3knZAX3KUUPTvamrcELICFtqgGeY20q&amp;scope=read_write">
								<span>Connect with Stripe</span>
							</a>
						</div>
						<div>
							<button className="coach-form-button">Become a Coach</button>
						</div>
					</form>
				</div>
			);
		} else {
			return <Redirect to="./Coach" />;
		}
	}
}

export default CoachForm;
