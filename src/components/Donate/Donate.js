import React from 'react';
import './Donate.css';
import { Link } from 'react-router-dom';

const Donate = () => {



	return (
		
		<div className="main">

			<div className="flex-container">
				<div className="div-picture"></div>
				<div className="text">
					<p>
						Your support could power a kinder, fairer, more friendly
						future.
					</p>
				</div>
				<div className="donate">
					<div className="donate-header">
						<h1>DONATE NOW</h1>
					</div>

					<form action="/#">
						<div className="donate-form">
							<br />
							<br />
							<label htmlFor="name">Personal Details</label>
							<br />
							<br />
							<input
								type="text"
								id="name"
								name="name"
								placeholder="Name..."
							/>
							<br />
							<br />
							<input
								type="text"
								id="email"
								name="email"
								placeholder="Email..."
							/>
							<br />
							<br />
							<label htmlfor="message">Message(optional)</label>
							<br />
							<br />

							<textarea></textarea>
							<br />
							<br />
							<label htmlfor="submit">Payment</label>
							<br />
							<br />
							<button
								id="payment-button"
								type="submit"
								value=""
							></button>
						</div>
					</form>
                    <br/>
					<div className="other">
						<Link to='/getInvolved'><h2>Other ways to donate or get involved →</h2></Link>
					</div>
					<br/>
				</div>
				<div class="div4"></div>
			</div>
		</div>
	);
};

export default Donate;
