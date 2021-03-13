import React from 'react';
import pic from './images/img2.png';
import './Slider.css';

const Slider = () => {
	return (
		<div id="slider-box">
			<img id="slider-pic" src={pic} alt="pic" />
			<div id="quote-box">
				<p id="quote-text">
					Those who are happiest are those who does the most for others.
				</p>
			</div>
		</div>
	);
};

export default Slider;
