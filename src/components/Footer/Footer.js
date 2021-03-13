import React from 'react';
import './Footer.css';

const Footer = () => {
	return (
		<div>
			<div id="footer">
				<h1 id="form-title">Sign up for our newsletter</h1>
				<div id="form">
					<form id="form-footer">
						<input className="form-input" type="text" />
						<input className="form-input" type="text" />
						<input className="form-input" type="text" />
						<button id="form-btn" type="submit">
							Send
						</button>
					</form>
				</div>
			</div>
			<div id="footer-nav">
				<nav>
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
				</nav>
			</div>
		</div>
	);
};

export default Footer;
