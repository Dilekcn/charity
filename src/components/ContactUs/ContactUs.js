import React from 'react';
import './ContactUs.css';
import imageHeader from '../GetInvolved/DonateGoods/Rectangle 26.png';

const ContactUs = () => {
	return (
		<div>
			<div className="donate-goods-container">
				<img
					src={imageHeader}
					alt="Avatar"
					className="donate-goods-image"
				/>
				<div className="donate-goods-overlay">
					<h1 className="donate-goods-text">Contact Us</h1>
				</div>
			</div>
			<h4 className="contact-us-intro-text">
				Please complete this enquiry form. We will try our best to respond
				within three working days.
			</h4>
		</div>
	);
};

export default ContactUs;
