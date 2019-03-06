import React/* , {Component} */ from 'react';
import { Link } from 'react-router-dom';
import './FooterBar.css';
import { connect } from 'react-redux';
import SignedIn from './SignedIn';
import SignedOut from './SignedOut';

/* class FooterBar extends Component {
    render() {
        return(
            <div id="footerbar">
                <SignedIn />
                <div className="no-break" id="signs">
                    <button className = "footlogs" onClick={this.clickHandlerSignIn}><Link to = './login'>Login</Link></button>
                    <text> OR </text>
                    <button className = "footlogs" onClick={this.clickHandlerSignUp}><Link to = './register'>Register</Link></button>
                </div>       
            </div>
        )    
    }
} */

const FooterBar = (props) => {
    const { auth } = props;
    //console.log(auth);
    const links = auth.uid ? <SignedIn /> : <SignedOut />;
    return (
        <div className="container">
            { links }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(FooterBar);
//export default FooterBar;