import React, { useState, useLayoutEffect } from 'react';
import './ContactUs.css';
import imageHeader from '../GetInvolved/DonateGoods/Rectangle 26.png';
import axios from 'axios';

const ContactUs = () => {
	useLayoutEffect(() => {
		window.scroll(0, 0);
	}, []);

	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	const submitMessage = () => {
		axios
			.post('http://localhost:4000/contact-us', {
				first_name: firstName,
				last_name: lastName,
				email: email,
				message: message,
			})
			.then((res) => console.log(res))
			.catch((err) => console.log(err));

		setFirstName('');
		setLastName('');
		setEmail('');
		setMessage('');

		window.scroll(0, 0);
	};

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
			<div className="contact-us-form-container">
				<form className="contact-us-form" onSubmit={submitMessage}>
					<label>First Name</label>
					<input
						type="text"
						placeholder="Enter your first name..."
						onChange={(e) => setFirstName(e.target.value)}
						required
					/>
					<label>Last Name</label>
					<input
						type="text"
						placeholder="Enter your last name..."
						onChange={(e) => setLastName(e.target.value)}
						required
					/>
					<label>Email Address</label>
					<input
						type="email"
						placeholder="Enter your email address..."
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
					<label>Your Message</label>
					<textarea
						placeholder="Enter your message..."
						onChange={(e) => setMessage(e.target.value)}
						required
					/>
					<button type="submit" className="contact-us-form-submit-btn">
						Submit
					</button>
				</form>
			</div>
		</div>
	);
};

export default ContactUs;
