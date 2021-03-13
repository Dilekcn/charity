import React from 'react';
import pic from './images/img2.png';
import './Slider.css';

const Slider = () => {
	return (
		<div>
			<img id="slider" src={pic} alt="pic" />
		</div>
	);
};

export default Slider;
