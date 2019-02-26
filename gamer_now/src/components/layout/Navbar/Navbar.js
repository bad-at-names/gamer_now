import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import GAMERnow from '../../../main_assets/GAMERnow.svg';

const Navbar = () => {
    return (
        <nav className="">
            <div className="container">
                <Link to='/' className="logo">
                    <img src = { GAMERnow } alt="" id="gamernow_navlogo"/>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar;