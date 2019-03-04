import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Login.css';

class Login extends Component {
  state = {
    email: null,
    password: null
  }

  handleChange = (e) => {
      this.setState({
          [e.target.id]: e.target.value
      })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.email == null)
      console.log("Email not entered");
    if (this.state.password == null) {
      console.log("Password not entered");
    }
    console.log(this.state);
  }
  
  render() {
    return (
      <div id = "Box">
        <form onSubmit={this.handleSubmit}>
            <h3>Sign in</h3>
            <div className="input-field">
                <label htmlFor="email" >Email</label>
                <input type="email" id="email" className= "enpinput" required={ true } onChange={ this.handleChange }/>
            </div>
            <div className="input-field">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" className= "enpinput" required = { true } onChange={ this.handleChange }/>
            </div>
            <div id="re-direct">
              <Link to = './register'>Don't have an account?</Link>
            </div>
            <div className="input-field">
                <button className = "log-buttons">Login</button>
            </div>
        </form>
      </div>
    )
  }
}

export default Login;
