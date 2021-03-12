import React from 'react';
import logo from './images/img.png';
import search from './images/search.png';
import './Header.css';

const Header = () => {
	return (
		<div className="div-header">
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
			<div class="searchContainer">
				<i class="fa fa-search searchIcon"></i>
				<input
					class="searchBox"
					type="search"
					name="search"
					placeholder="Search..."
				/>
				<input type="submit" value="Search" class="searchButton" />
			</div>
		</div>
	);
};

export default Header;
