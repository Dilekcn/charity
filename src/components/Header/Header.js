import React from 'react';
import logo from './images/img.png';
<<<<<<< HEAD
import search from './images/search.png';
import './Header.css';

const Header = () => {
	return (
		<div className="div-header">
			<img id="img-logo" src={logo} alt="logo" />
			<button id="btn-donate">
				<span id="text-btn-donate">DONATE</span>
			</button>
=======
import './Header.css';

const Header = () => {
	return (
		<div id="div-header">
<<<<<<< Updated upstream
>>>>>>> e98fa1e4a4679608a13a6f73f661342176d59c73
			<nav>
				<a href="#home">
					<img id="img-logo" src={logo} alt="logo" />
				</a>
				<a href="#donate">
					<button id="btn-donate">
						<span id="text-btn-donate">DONATE</span>
					</button>
=======
			<div>
				<img src={logo} alt="logo" />
			</div>
			<div>
				<a href="/#">
					<button id="btn-donate">DONATE</button>
>>>>>>> Stashed changes
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
