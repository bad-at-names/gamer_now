import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import GAMERnow from '../../../main_assets/GAMERnow.svg';
import Arrow from '../../../main_assets/arrow.svg';

const NavBar = () => {
    return (
        <div id="nav-div">
            <div id = "nav-logos">
                <Link to='/' className="logo">    
                    <img src = { GAMERnow } alt="" id="gamernow_navlogo"/>
                </Link>
                <img src = { Arrow } alt='' id= "arrow"/>
            </div>
        </div>
    )
}

export default NavBar;