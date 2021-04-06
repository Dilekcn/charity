import React, { useState } from 'react';
import './Footer.css';
import axios from 'axios';

const Footer = () => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [savedMessage, setSavedMessage] = useState(false);

	const subscribeLetter = (e) => {
		e.preventDefault();
		axios
			.post('http://localhost:4000/subscribers', {
				first_name: firstName,
				last_name: lastName,
				email: email,
			})
			.then((res) => console.log(res))
			.catch((err) => console.log(err));

		setFirstName('');
		setLastName('');
		setEmail('');
		setSavedMessage(true);
	};

	return (
		<div>
			<div id="footer">
				<h1 id="form-title">Sign up for our newsletter</h1>
				<div id="form">
					<form id="form-footer" onSubmit={subscribeLetter}>
						<input
							className="form-input"
							type="text"
							placeholder="First Name"
							required
							onChange={(e) => setFirstName(e.target.value)}
							value={firstName}
						/>
						<input
							className="form-input"
							type="text"
							placeholder="Last Name"
							required
							onChange={(e) => setLastName(e.target.value)}
							value={lastName}
						/>
						<input
							className="form-input"
							type="email"
							placeholder="Email"
							required
							onChange={(e) => setEmail(e.target.value)}
							value={email}
						/>
						<button id="form-btn" type="submit">
							Send
						</button>
					</form>
					<br />
					<div>
						{savedMessage ? (
							<h3 className="newsletter-saved-message">
								Thank you for subscribing to our newsletter...
							</h3>
						) : null}
					</div>
				</div>
			</div>
			<div className="footer-nav">
				<ul>
					<li>
						<a href="#terms">Terms & Conditions</a>
					</li>
					<li>
						<a href="#cookies">Privacy & Cookies</a>
					</li>
					<li>
						<a href="#contactus">Contact Us</a>
					</li>
					<li>
						<a href="#access">Accesibility</a>
					</li>
					<li>&copy;2021 SoftInnovas</li>
				</ul>
			</div>
		</div>
	);
};

export default Footer;
