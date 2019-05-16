import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signUp } from '../../store/actions/authActions';

import A0 from '../../main_assets/avatars/avatar0.png';
import A1 from '../../main_assets/avatars/avatar1.png';
import A2 from '../../main_assets/avatars/avatar2.png';
import A3 from '../../main_assets/avatars/avatar3.png';
import A4 from '../../main_assets/avatars/avatar4.png';
import A5 from '../../main_assets/avatars/avatar5.png';
import A6 from '../../main_assets/avatars/avatar6.png';
import A7 from '../../main_assets/avatars/avatar7.png';
import A8 from '../../main_assets/avatars/avatar8.png';
import A9 from '../../main_assets/avatars/avatar9.png';

class Register extends Component {
	state = {
		name: '',
		email: '',
		password: '',
		avatar: null
	};

	handleChange = e => {
		this.setState({
			[e.target.id]: e.target.value
		});
	};

	handleAvatar = e => {
		var a = e.target.id;
		this.setState({
			avatar: a
		});
	};

	handleSubmit = e => {
		e.preventDefault();
		console.log(this.state);
		this.props.signUp(this.state);
	};

	render() {
		const { auth } = this.props;
		if (auth.uid) return <Redirect to="/" />;
		return (
			<div className="super-container">
				<div id="Box">
					<form onSubmit={this.handleSubmit}>
						<h3>Register</h3>
						<div className="input-field">
							<label htmlFor="name">Name</label>
							<input
								type="name"
								id="name"
								className="enpinput"
								placeholder="Display Name"
								onChange={this.handleChange}
							/>
						</div>
						<div className="input-field">
							<label htmlFor="email">Email</label>
							<input
								type="email"
								id="email"
								className="enpinput"
								placeholder="your@email.com"
								onChange={this.handleChange}
							/>
						</div>
						<div className="input-field">
							<label htmlFor="password">Password</label>
							<input
								type="password"
								id="password"
								className="enpinput"
								placeholder="password"
								onChange={this.handleChange}
							/>
						</div>
						<div>
							<label className="avatar-label" htmlFor="avatar0">
								<input
									type="radio"
									value="avatar0"
									name="avatar"
									id="avatar0"
									className="avatar"
									label="avatar0"
									onChange={this.handleAvatar}
								/>
								<img src={A0} className="avatar-image" alt="" />
							</label>
							<label className="avatar-label" htmlFor="avatar1">
								<input
									type="radio"
									value="avatar1"
									name="avatar"
									id="avatar1"
									className="avatar"
									label="avatar1"
									onChange={this.handleAvatar}
								/>
								<img src={A1} className="avatar-image" alt="" />
							</label>
							<label className="avatar-label" htmlFor="avatar2">
								<input
									type="radio"
									value="avatar2"
									name="avatar"
									id="avatar2"
									className="avatar"
									label="avatar2"
									onChange={this.handleAvatar}
								/>
								<img src={A2} className="avatar-image" alt="" />
							</label>
							<label className="avatar-label" htmlFor="avatar3">
								<input
									type="radio"
									value="avatar3"
									name="avatar"
									id="avatar3"
									className="avatar"
									label="avatar3"
									onChange={this.handleAvatar}
								/>
								<img src={A3} className="avatar-image" alt="" />
							</label>
							<label className="avatar-label" htmlFor="avatar4">
								<input
									type="radio"
									value="avatar4"
									name="avatar"
									id="avatar4"
									className="avatar"
									label="avatar4"
									onChange={this.handleAvatar}
								/>
								<img src={A4} className="avatar-image" alt="" />
							</label>
						</div>
						<div>
							<label className="avatar-label" htmlFor="avatar5">
								<input
									type="radio"
									value="avatar5"
									name="avatar"
									id="avatar5"
									className="avatar"
									label="avatar5"
									onChange={this.handleAvatar}
								/>
								<img src={A5} className="avatar-image" alt="" />
							</label>
							<label className="avatar-label" htmlFor="avatar6">
								<input
									type="radio"
									value="avatar6"
									name="avatar"
									id="avatar6"
									className="avatar"
									label="avatar6"
									onChange={this.handleAvatar}
								/>
								<img src={A6} className="avatar-image" alt="" />
							</label>
							<label className="avatar-label" htmlFor="avatar7">
								<input
									type="radio"
									value="avatar7"
									name="avatar"
									id="avatar7"
									className="avatar"
									label="avatar7"
									onChange={this.handleAvatar}
								/>
								<img src={A7} className="avatar-image" alt="" />
							</label>
							<label className="avatar-label" htmlFor="avatar8">
								<input
									type="radio"
									value="avatar8"
									name="avatar"
									id="avatar8"
									className="avatar"
									label="avatar8"
									onChange={this.handleAvatar}
								/>
								<img src={A8} className="avatar-image" alt="" />
							</label>
							<label className="avatar-label" htmlFor="avatar9">
								<input
									type="radio"
									value="avatar9"
									name="avatar"
									id="avatar9"
									className="avatar"
									label="avatar9"
									onChange={this.handleAvatar}
								/>
								<img src={A9} className="avatar-image" alt="" />
							</label>
						</div>
						<div className="input-field">
							<button className="log-buttons">Register</button>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		auth: state.firebase.auth
	};
};

const mapDispatchToProps = dispatch => {
	return {
		signUp: state => dispatch(signUp(state))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Register);
