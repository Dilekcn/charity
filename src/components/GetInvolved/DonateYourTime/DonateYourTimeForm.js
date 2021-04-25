import React, { useState, useEffect } from 'react';
import './DonateYourTimeForm.css';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import axios from 'axios';

const DonateYourTimeForm = () => {
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [firstname, setFirstname] = useState('');
	const [lastname, setLastname] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [based, setBased] = useState('');
	const [text, setText] = useState('');
	const [text1, setText1] = useState('');

	const submitForm = (e) => {
		e.preventDefault();
		axios
			.post('https://mern-brothers.herokuapp.com/time-donation', {
				firstname: firstname,
				lastname: lastname,
				email: email,
				phone: phone,
				based_in: based,
				interested_in: text,
				comments: text1,
			})
			.then((res) => console.log(res))
			.catch((err) => console.log(err));
		setFirstname('');
		setLastname('');
		setEmail('');
		setPhone('');
		setBased('');
		setText('');
		setText1('');
		setModalIsOpen(true);
		e.preventDefault();
	};

	useEffect(() => {
		window.scroll(0, 0);
	}, []);

	return (
		<div id="donate_your_time_form">
			<div className="donate_your_time_form">
				<div className="donete_your_time_form_title">
					<p>Donate Your Time</p>
				</div>
			</div>
			<div className="donate_your_time_form_container">
				<form onSubmit={submitForm}>
					<div id="time_container">
						<div className="time_container">
							<div className="time_name">
								<label htmlfor="firstname">First Name</label>
								<br />
								<input
									value={firstname}
									onChange={(e) => setFirstname(e.target.value)}
									type="text"
									id="firstname"
									name="firstname"
									placeholder="Enter your first name"
									required
								/>
							</div>
							<br />
							<div className="time_name">
								<label htmlForm="lastname">Last Name</label>
								<br />
								<input
									value={lastname}
									onChange={(e) => setLastname(e.target.value)}
									type="text"
									id="lastname"
									name="lastname"
									placeholder="Enter your last name"
									required
								/>
							</div>
						</div>
						<br />
						<div className="time_container_right">
							<div className="time_number">
								<br />
								<label htmlFor="number">
									Contact Number
									<span
										className="donate_time_form_contact_num"
										style={{ fontSize: '14px' }}
									>
										<i>(Format XXX-XXXX-XXXX)</i>
									</span>
								</label>
								<br />
								<input
									value={phone}
									pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}"
									onChange={(e) => setPhone(e.target.value)}
									type="phone"
									id="number"
									name="number"
									placeholder="Enter your contact number"
									required
								/>
							</div>
							<br />
							<div className="time_based">
								<label htmlFor="based">Where are you based?</label>
								<br />
								<input
									value={based}
									onChange={(e) => setBased(e.target.value)}
									type="text"
									id="based"
									name="based"
									placeholder="Enter the city name"
									required
								/>
							</div>
						</div>
						<div className="time_email">
							<label htmlFor="email">Email</label>
							<br />
							<input
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								type="email"
								id="email"
								name="email"
								placeholder="Enter your email address"
								required
							/>
						</div>

						<div className="time_text">
							<label htmlFor="text">
								What particular areas are you willing to contribute to
								or interest you the most?
							</label>{' '}
							<br /> <br />
							<textarea
								value={text}
								onChange={(e) => setText(e.target.value)}
								type="text"
								id="text"
								name="text"
							/>
						</div>

						<div className="time_text2">
							<label htmlFor="text2">Other thoughts or comments</label>{' '}
							<br /> <br />
							<textarea
								value={text1}
								onChange={(e) => setText1(e.target.value)}
								type="textarea"
								id="text2"
								name="text2"
								rows="10"
								cols="50"
							/>
						</div>

						<div className="time_submit">
							{' '}
							<button type="submit" className="time_submit_sub">
								Submit
							</button>
						</div>
					</div>
				</form>
			</div>
			<Modal
				className="donate_time_modal"
				isOpen={modalIsOpen}
				onRequestClose={() => setModalIsOpen(false)}
				style={{
					overlay: {},
					content: {
						display: 'flex',
						justifyContent: 'center',
						flexDirection: 'column',
						alignItems: 'center',
						top: '25%',
						left: '25%',
						right: '25%',
						height: 'fit-content',
						width: '30%',
						padding: '60px',
						textAlign: 'center',
						lineHeight: 1.8,
						backgroundColor: '#347ca5',
						color: 'white',
						fontSize: 20,
					},
				}}
			>
				Thank you for your interest! We will be in touch with you soon.
				<br />
				<br />
				<br />
				<Link to="/" className="donate-time-form-btn-popup">
					Back to Home Page
				</Link>
			</Modal>
		</div>
	);
};

export default DonateYourTimeForm;
