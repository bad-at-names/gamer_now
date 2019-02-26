import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import SignIn from '../../../components/auth/SignIn';
import SignUp from '../../../components/auth/SignUp';

class FootBar extends Component {
    render() {
        return(
            <div>
                <div className="no-break"></div>
                <div className="no-break">Hello, User</div>
                <div className="no-break">{SignIn}</div>
                <div className="no-break">{SignUp}</div>
            </div>
        )    
    }
}

export default FootBar;