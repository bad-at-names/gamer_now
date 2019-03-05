import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './FooterBar.css';
import { connect } from 'react-redux'

class FooterBar extends Component {
    render() {
        return(
            <div id="footerbar">
                <div className="no-break" id="signs">
                    <button className = "footlogs" onClick={this.clickHandlerSignIn}><Link to = './login'>Login</Link></button>
                    <text> OR </text>
                    <button className = "footlogs" onClick={this.clickHandlerSignUp}><Link to = './register'>Register</Link></button>
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