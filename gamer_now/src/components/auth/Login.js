import React, { Component } from 'react';
import {Link} from 'react-router-dom';

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
    console.log(this.state);
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmitIn}>
            <h5>Sign in</h5>
            <div className="input-field">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" onChange={this.handleChangeIn}/>
            </div>
            <div className="input-field">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" onChange={this.handleChangeIn}/>
            </div>
            <div id="re-direct"><Link to = './register'>Don't have an account?</Link></div>
            <div className="input-field">
                <button>Login</button>
            </div>
        </form>
      </div>
    )
  }
}

export default Login;
