import React from 'react';
import logo from './images/img.png';

const Header = () => {
	return (
		<div
			style={{
				width: '100%',
				height: '104px',
			}}
		>
			<img src={logo} alt="logo" />
		</div>
	);
};

export default Header;
