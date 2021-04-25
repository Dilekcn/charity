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
	const [checked, setChecked] = useState(false);

	useEffect(() => {
		axios
			.get('https://mern-brothers.herokuapp.com/posts')
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

	const changeChecked = () => {
		setChecked(!checked);
	};

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

			<input
				type="checkbox"
				id="header-menu-checkbox"
				onChange={(e) => {
					setChecked(e.target.checked);
				}}
				checked={checked}
			/>
			<label htmlFor="header-menu-checkbox" className="header-menu-icon">
				<GiHamburgerMenu
					className="header-hamburger-menu-icon"
					style={{ fill: '#347ca5' }}
				/>
			</label>

			<nav className="header-nav">
				<ul>
					<Link
						to="/getInvolved"
						className="header-nav-links"
						onClick={changeChecked}
					>
						Get Involved
					</Link>

					<Link
						to="/campaigns&news"
						className="header-nav-links"
						onClick={changeChecked}
					>
						Campaigns & News
					</Link>

					<Link
						to="/aboutus"
						className="header-nav-links"
						onClick={changeChecked}
					>
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
							if (e.target.textContent ==='Log Out') {
								setIsLoggedIn(false);
								sessionStorage.removeItem('userInfo');
							}
							changeChecked();
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
