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
                <form onSubmit={this.handleSubmitUp}>
                    <h3>Register</h3>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChangeUp}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChangeUp}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="repassword" onChange={this.handleChangeUp}/>
                    </div>
                    <div className="input-field">
                        <button>Register</button>
                    </div>
                </form>
        </div>
        )
    }
}

export default Register;
