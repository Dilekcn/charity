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
			<img
				style={{
					position: 'absolute',
					width: '48px',
					height: '44px',
					left: '21px',
					top: '34px',
				}}
				src={logo}
				alt="logo"
			/>
		</div>
	);
};

export default Header;
