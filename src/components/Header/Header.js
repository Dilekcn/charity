import React, { useEffect, useState } from 'react';
import logo from './images/img.png';
import './Header.css';
import { AiOutlineSearch } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

const Header = ({ isLoggedIn, setIsLoggedIn, searchFunc }) => {
	const [search, setSearch] = useState('');
	const [posts, setPosts] = useState([]);
	const [userName, setUserName] = useState('');
	const history = useHistory();

	useEffect(() => {
		axios
			.get('http://localhost:4000/posts')
			.then((res) => setPosts(res.data))
			.catch((err) => console.log(err));
	}, []);

	const onSubmitSearch = (e) => {
		e.preventDefault();
		const results = [];
		for (let i = 0; i < posts.length; i++) {
			if (posts[i].title.toLowerCase().search(search.toLowerCase()) !== -1) {
				results.push(posts[i].id);
			}
		}
		searchFunc(results);
		history.push('/search-results');
	};

	useEffect(() => {
		const info = JSON.parse(sessionStorage.getItem('userInfo'));
		if (info) {
			setUserName(
				info.firstname.charAt(0).toUpperCase() + info.firstname.slice(1),
			);
		}
	}, [isLoggedIn]);
	return (
		<div id="div-header">
			<Link to="/">
				<img id="logo" src={logo} alt="logo" />
			</Link>

			<a href="/donate">
				<button id="btn-donate">DONATE</button>
			</a>
			<form className="header-search-container" onSubmit={onSubmitSearch}>
				<input
					className="header-search-box"
					type="search"
					placeholder="Search"
					required
					value={search}
					onChange={(e) => setSearch(e.target.value)}
				/>
				<button className="header-search-box-btn" type="submit">
					<AiOutlineSearch
						className="header-search-box-btn-icon"
						fill={'white'}
					/>
				</button>
			</form>
			<input type="checkbox" id="header-menu-checkbox" />
			<label for="header-menu-checkbox" className="header-menu-icon">
				<GiHamburgerMenu
					className="header-hamburger-menu-icon"
					style={{ fill: '#347ca5' }}
				/>
			</label>
			<nav className="header-nav">
				<ul>
					<Link to="/getInvolved" className="header-nav-links">
						Get Involved
					</Link>

					<Link to="/campaigns&news" className="header-nav-links">
						Campaigns & News
					</Link>

					<Link to="/about-us" className="header-nav-links">
						About Us
					</Link>
					{isLoggedIn && userName !== 'guest' ? (
						<li className="header-nav-links">
							<p className="header-username">{userName}</p>
						</li>
					) : null}

					<Link
						to="/login"
						className="header-nav-links"
						onClick={(e) => {
							if (e.target.textContent == 'Log Out') {
								setIsLoggedIn(false);
								sessionStorage.removeItem('userInfo');
							}
						}}
					>
						{isLoggedIn ? 'Log Out' : 'Log In'}
					</Link>
				</ul>
			</nav>
		</div>
	);
};

export default Header;
