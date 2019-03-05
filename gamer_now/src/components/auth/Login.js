import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Login.css';
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'

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
    //if (this.state.email == null)
      //console.log("Email not entered");
    //if (this.state.password == null) {
      //console.log("Password not entered");
    //}
    //console.log(this.state);
  }
  
  render() {
    const { authError } = this.props;
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
                  { authError ? <p>{authError}</p> : null } {/**this does not work, suppose to be a login failed message if authError is not null*/}
                </div>
            </div>
        </form>
      </div>
    )
  }
}

/* const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError
  }
} */

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds))
  }
}

export default connect(null, mapDispatchToProps)(Login) /* This null is suppose to be mapStateToProps. results in typeError for authError*/
