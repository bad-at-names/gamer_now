import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import GAMERnow from '../../../main_assets/GAMERnow.png';
import Arrow from '../../../main_assets/arrow.svg';

const NavBar = () => {
	return (
		<div id="nav-div">
			<div id="nav-logos">
				<Link to="/">
					<img src={GAMERnow} alt="" id="gamernow_navlogo" />
				</Link>
			</div>
		</div>
	);
};

export default NavBar;
