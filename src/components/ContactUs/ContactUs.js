import React, { useState, useLayoutEffect } from 'react';
import './ContactUs.css';
import axios from 'axios';
import {
	AiFillFacebook,
	AiFillTwitterSquare,
	AiOutlineInstagram,
} from 'react-icons/ai';

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
			<div className="contact-us-header-container">
				<h1 className="contact-us-header-text">Contact Us</h1>
			</div>
			<div className="contact-us-container">
				<div className="contact-us-form-container">
					<h4 className="contact-us-intro-text">
						Please complete this enquiry form. We will try our best to
						respond within three working days.
					</h4>
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
				<div className="contact-us-communication">
					<div className="contact-us-communication-address">
						<h2 className="contact-us-communication-address-title">
							Address
						</h2>
						<h3 className="contact-us-communication-address-text">
							Senate House Malet Street London WC1E 7HU
						</h3>
					</div>
					<div className="contact-us-communication-phone">
						<h2 className="contact-us-communication-phone-title">
							Phone
						</h2>
						<h3 className="contact-us-communication-phone-text">
							020 3451 5677
						</h3>
					</div>
					<div className="contact-us-communication-follow-us">
						<h2 className="contact-us-communication-follow-us-title">
							Follow Us
						</h2>
						<div style={{ textAlign: 'center' }}>
							<a
								href="https://www.facebook.com/"
								target="_blank"
								rel="noreferrer"
								className="contact-us-communication-sm-logo-link"
							>
								<AiFillFacebook className="contact-us-communication-sm-logo" />
							</a>
							<a
								href="https://www.twitter.com/"
								target="_blank"
								rel="noreferrer"
								className="contact-us-communication-sm-logo-link"
							>
								<AiFillTwitterSquare className="contact-us-communication-sm-logo" />
							</a>
							<a
								href="https://www.instagram.com/"
								target="_blank"
								rel="noreferrer"
								className="contact-us-communication-sm-logo-link"
							>
								<AiOutlineInstagram className="contact-us-communication-sm-logo" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactUs;
