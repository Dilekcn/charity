import React from 'react';
import logo from './images/img.png';
import './Header.css';

const Header = () => {
	return (
		<div id="div-header">
			<div>
				<a href="http://localhost:3000/">
					<img src={logo} alt="logo" />
				</a>
			</div>
			<div>
				<a href="http://localhost:3000/donate">
					<button id="btn-donate">DONATE</button>
				</a>
			</div>
			<div>
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
							<a href="/login">Log In</a>
						</li>
					</ul>
				</nav>
			</div>
			<div>
				<input id="search-box" type="text" placeholder="Search" />
			</div>
		</div>
	);
};

export default Header;
