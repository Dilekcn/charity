import React from 'react';
import logo from './images/img.png';

import './header.css';
import image2 from './images/img2.png';

const Header = () => {
	return (
		<div id="div-header">
			<img id="img-logo" src={logo} alt="logo" />
			<button id="btn-donate">
				<span id="text-btn-donate">DONATE</span>
			</button>
			<nav>
				<ul>
					<li>
						<a href="#getInvolved">Get Involved</a>
					</li>
					<li>
						<a href="#campaings&news">Campaigns & News</a>
					</li>
					<li>
						<a href="#aboutus">About Us</a>
					</li>
					<li>
						<a href="#login">Log In</a>
					</li>
				</ul>
			</nav>

			<input id="searchbox" type="text" placeholder="Search" />
			<img src={image2} alt="big-pic" id="slider" />
			<div id="quote-box">
				<span id="quote-text">
					"Those who are happiest are those who does the most for others."
				</span>
				<span id="quote-person">Booker T. Washington</span>
			</div>
		</div>
	);
};

export default Header;
