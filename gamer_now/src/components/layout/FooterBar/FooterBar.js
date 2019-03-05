import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './FooterBar.css';
import { connect } from 'react-redux'

class FooterBar extends Component {
    render() {
        return(
            <div id="footerbar">
                <div className="no-break"></div>
                <div className="no-break">Hello, User</div>
                <div className="no-break" id="signs">
                    <button className = "log-buttons" onClick={this.clickHandlerSignIn}><Link to = './login'><span>Login</span></Link></button>
                    OR
                    <button className = "log-buttons" onClick={this.clickHandlerSignUp}><Link to = './register'><span>Register</span></Link></button>
                </div>       
            </div>
        )    
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {

    }
}

export default connect(mapStateToProps)(FooterBar);