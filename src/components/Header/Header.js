import React from 'react';
import logo from './images/img.png';
import search from './images/search.png';

const Header = () => {
	return (
		<div
			style={{
				width: '1152px',
				height: '104px',
				left: "0px",
				top: "1px"
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
			<img
				style={{
					position: "absolute",
					left: "95.57%",
					right: "2.87%",
					top: "1.96%",
					bottom: "97.32%",
					background: "#FFFFFF",
					border: "1px solid #347CA5",
					boxSizing: "border-box",

				}}
				src={search}
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
			<span
				style={{
					position: "absolute",
					width: "134px",
					height: "20px",
					left: "256px",
					top: "49px",
					fontFamily: "Roboto",
					fontStyle: "normal",
					fontWeight: "normal",
					fontSize: "24px",
					lineHeight: "28px",

					color: "#347CA5"

				}}>Get involved</span>
				<span
				style={{
					position: "absolute",
					width: "217px",
					height: "20px",
					left: "418px",
					top: "48px",
					fontFamily: "Roboto",
					fontStyle: "normal",
					fontWeight: "normal",
					fontSize: "24px",
					lineHeight: "28px",

					color: "#347CA5"

				}}>Campaigns & News</span>
				<span
				style={{
					position: "absolute",
					width: "103px",
					height: "20px",
					left: "663px",
					top: "46px",
					fontFamily: "Roboto",
					fontStyle: "normal",
					fontWeight: "normal",
					fontSize: "24px",
					lineHeight: "28px",

					color: "#347CA5"

				}}>About us</span>
				<span
				style={{
					position: "absolute",
					width: "84px",
					height: "27px",
					left: "794px",
					top: "47px",
					fontFamily: "Roboto",
					fontStyle: "normal",
					fontWeight: "normal",
					fontSize: "24px",
					lineHeight: "28px",

					color: "#347CA5"

				}}>Log in</span>
				<input type="text" placeholder="Search" style={{
					position: "absolute",
					width: "209px",
					height: "27px",
					left: "917px",
					top: "43px",
					background: "#FFFFFF",
					border: "1px solid #347CA5",
					boxSizing: "border-box",
					borderRadius: "10px",
					color: "#347CA5"

				}}/>
		</div>
	);
};

export default Header;
