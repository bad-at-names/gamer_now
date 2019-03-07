import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Login.css';
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'
import { Redirect } from 'react-router-dom';

class Login extends Component {
  state = {
    email: '',
    password: ''
  }

  handleChange = (e) => {
      this.setState({
          [e.target.id]: e.target.value
      })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signIn(this.state);
  }
  
  render() {
    const { authError, auth } = this.props;
    if (auth.uid) return <Redirect to='/' />

    return (
      <div id = "Box">
        <form onSubmit={this.handleSubmit}>
            <h3 className = "form-title">Sign in</h3>
            <div className="input-field">
                <label htmlFor="email" >Email</label>
                <input type="email" id="email" className= "enpinput" placeholder = "your@email.com" required={ true } onChange={ this.handleChange }/>
            </div>
            <div className="input-field">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" className= "enpinput" placeholder = "password" required = { true } onChange={ this.handleChange }/>
            </div>
            <div id="re-direct">
              <Link to = './register'>Don't have an account?</Link>
            </div>
            <div className="input-field">
                <button className = "log-buttons">Login</button>
                <div>
                  { authError ? <p>{authError}</p> : null }
                  {/* <img src="https://steamcommunity-a.akamaihd.net/public/images/signinthroughsteam/sits_02.png" width="109" height="66" border="0"></img> */}
                </div>
            </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
