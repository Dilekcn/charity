import React from 'react';
import logo from './images/img.png';
import './Header.css';

const Header = ({isLoggedIn, setIsLoggedIn}) => {
	return (
		<div id="div-header">
			<div>
				<a href="/">
					<img id="logo" src={logo} alt="logo" />
				</a>
			</div>
			<div>
				<a href="/donate">
					<button id="btn-donate">DONATE</button>
				</a>
			</div>
			<div>
				<nav>
					<ul>
						<li>
							<a href="/getInvolved">Get Involved</a>
						</li>
						<li>
							<a href="/campaings&news">Campaigns & News</a>
						</li>
						<li>
							<a href="/aboutus">About Us</a>
						</li>
						<li>
							<a href="/login" onClick={(e) => e.target.textContent == 'Log Out' && setIsLoggedIn(false) }>{isLoggedIn ? 'Log Out' : 'Log In'}</a>
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
