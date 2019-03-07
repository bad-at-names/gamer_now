import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class Register extends Component {
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
      console.log(this.state);
    }
    render() {
        const { auth } = this.props;
        if (auth.uid) return <Redirect to='/' />
        return (
            <div id='Box'>
                <form onSubmit={this.handleSubmit}>
                    <h3>Register</h3>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" className= "enpinput" placeholder = "your@email.com" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" className= "enpinput" placeholder = "password" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="repassword" className= "enpinput" placeholder = "password" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <button className = "log-buttons">Register</button>
                    </div>
                </form>
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      auth: state.firebase.auth
    }
  }

export default connect(mapStateToProps)(Register);
