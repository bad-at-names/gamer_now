import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './FooterBar.css';

class FooterBar extends Component {
    clickHandlerSignIn = (e) => {
        e.preventDefault();
    }

    clickHandlerSignUp = (e) => {
        e.preventDefault();
    }

    render() {
        return(
            <div id="footerbar">
                <div className="no-break"></div>
                <div className="no-break">Hello, User</div>
                <div className="no-break" id="signs">
                    <button id = "sign-in" onClick={this.clickHandlerSignIn}><Link to = './login'>Login</Link></button>
                    <button id = "sign-up" onClick={this.clickHandlerSignUp}><Link to = './register'>Register</Link></button>
                </div>       
            </div>
        )    
    }
}

export default FooterBar;