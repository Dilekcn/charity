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
			<button
				style={{
					position: 'absolute',
					width: '153px',
					height: '63px',
					left: '88px',
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
		</div>
	);
};

export default Header;
