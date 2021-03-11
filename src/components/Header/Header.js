import React from 'react';
import logo from './images/img.png';
import search from './images/search.png';
import './header.css';

const Header = () => {
	return (
		<div
			style={{
				width: '1152px',
				height: '104px',
				left: '0px',
				top: '1px',
			}}
		>
			<img
				style={{
					position: 'absolute',
					width: '48px',
					height: '44px',
					left: '41px',
					top: '34px',
				}}
				src={logo}
				alt="logo"
			/>

			<button
				style={{
					position: 'absolute',
					width: '153px',
					height: '63px',
					left: '118px',
					top: '22px',
					background: '#347CA5',
					borderRadius: '10px',
				}}
			>
				<span
					style={{
						width: '117px',
						height: '20px',
						left: '110px',
						top: '37px',
						fontFamily: 'Roboto',
						fontStyle: 'normal',
						fontWeight: 'normal',
						fontSize: '30px',
						lineHeight: '35px',
						color: 'white',
					}}
				>
					DONATE
				</span>
			</button>
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
							<a href="#login">Log In</a>
						</li>
					</ul>
				</nav>
			</div>
			<input
				type="text"
				placeholder="Search"
				style={{
					position: 'absolute',
					width: '299px',
					height: '27px',
					left: '1027px',
					top: '40px',
					background: '#FFFFFF',
					border: '1px solid #347CA5',
					boxSizing: 'border-box',
					borderRadius: '10px',
					color: '#347CA5',
				}}
			/>
			<img
				id="img"
				style={{
					position: 'absolute',
					left: '93.97%',
					right: '2.87%',
					top: '6.06%',
					bottom: '97.32%',
					background: '#FFFFFF',
					border: '0px #347CA5',
					boxSizing: 'border-box',
					width: '17.91px',
					height: '17.32px',
				}}
				src={search}
				alt="logo"
			/>
		</div>
	);
};

export default Header;
