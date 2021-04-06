import React from 'react';
import logo from './images/img.png';
import './Header.css';
import { AiOutlineSearch } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom';

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
						<Link to="/getInvolved">Get Involved</Link>
					</li>
					<li>
						<Link to="/campaigns&news">Campaigns & News</Link>
					</li>
					<li>
						<Link to="/aboutus">About Us</Link>
					</li>
					<li>
						<Link
							to="/login"
							onClick={(e) => {
								if(e.target.textContent == 'Log Out'){
									setIsLoggedIn(false)
									sessionStorage.removeItem('userInfo')
								}
							}}
						>
							{isLoggedIn ? 'Log Out' : 'Log In'}
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Header;
