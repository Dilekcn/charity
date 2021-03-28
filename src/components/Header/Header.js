import React from 'react';
import logo from './images/img.png';
import './Header.css';
import { AiOutlineSearch } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';

const Header = ({ isLoggedIn, setIsLoggedIn }) => {
	return (
		<div id="div-header">
			<a href="/">
				<img id="logo" src={logo} alt="logo" />
			</a>

			<a href="/donate">
				<button id="btn-donate">DONATE</button>
			</a>
			<form className="header-search-container">
				<input
					className="header-search-box"
					type="search"
					placeholder="Search"
					required
				/>
				<button className="header-search-box-btn">
					<AiOutlineSearch size={17} fill={'white'} />
				</button>
			</form>
			<input type="checkbox" id="header-menu-checkbox" />
			<label for="header-menu-checkbox" className="header-menu-icon">
				<GiHamburgerMenu size={30} style={{ fill: '#347ca5' }} />
			</label>
			<nav className="header-nav">
				<ul className="header-nav-links">
					<li>
						<a href="/getInvolved">Get Involved</a>
					</li>
					<li>
						<a href="/campaigns&news">Campaigns & News</a>
					</li>
					<li>
						<a href="/aboutus">About Us</a>
					</li>
					<li>
						<a
							href="/login"
							onClick={(e) =>
								e.target.textContent == 'Log Out' &&
								setIsLoggedIn(false)
							}
						>
							{isLoggedIn ? 'Log Out' : 'Log In'}
						</a>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Header;
