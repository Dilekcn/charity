import React from 'react';
import logo from './images/img.png';
import search from './images/search.png';
import './header.css';

const Header = () => {
	return (
		<div classname="div-header">
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
			<input type="text" placeholder="Search" id="searchbar" />
			<img id="search-icon" src={search} alt="logo" />
		</div>
	);
};

export default Header;
