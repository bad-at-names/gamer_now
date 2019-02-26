import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import SignIn from '../../../components/auth/SignIn';
import SignUp from '../../../components/auth/SignUp';
import './FooterBar.css';

class FooterBar extends Component {
    render() {
        return(
            <div id="footerbar">
                <div className="no-break"></div>
                <div className="no-break">Hello, User</div>
            </div>
        )    
    }
}

export default FooterBar;