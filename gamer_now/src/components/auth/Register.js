import React, { Component } from 'react';

class Register extends Component {
    state = {
      email: null,
      password: null,
      repassword: null
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
            <div id='Box'>
                <form onSubmit={this.handleSubmit}>
                    <h3>Register</h3>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder = "Your wonderful email" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" placeholder = "What's the password?" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="repassword" placeholder = "I said. WHATS THE PASSWORD" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <button className = "log-buttons">Register</button>
                    </div>
                </form>
        </div>
        )
    }
}

export default Register;
