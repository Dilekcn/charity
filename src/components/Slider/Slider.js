import React, { useEffect } from 'react';
import pic from './images/img2.png';
import './Slider.css';

const Slider = () => {
	useEffect(() => {
		window.scroll(0, 0);
	}, []);
	return (
		<div id="slider-box">
			<img id="slider-pic" src={pic} alt="pic" />

			<p id="quote-text">
				<span>
					"Those who are happiest are those who does the most for others."
				</span>
				<br />
				<span id="quote-person">Booker T. Washington</span>
			</p>
		</div>
	);
};

export default Slider;
