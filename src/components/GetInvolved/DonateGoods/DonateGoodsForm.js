import React, { useState, useLayoutEffect } from 'react';
import imageHeader from './Rectangle 26.png';
import './DonateGoodsForm.css';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import axios from 'axios';

const DonateGoodsForm = () => {
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [phone, setPhone] = useState('');
	const [email, setEmail] = useState('');
	const [typeOfGoods, setTypeOfGoods] = useState('');
	const [numberOfPieces, setNumberOfPieces] = useState('');
	const [address, setAddress] = useState('');
	const [postCode, setPostCode] = useState('');
	const [instructions, setInstructions] = useState('');
	const [userId, setUserId] = useState(
		JSON.parse(sessionStorage.getItem('userInfo')).id,
	);

	setUserId()
	useLayoutEffect(() => {
		window.scroll(0, 0);
	}, []);

	const makeAnotherDonation = () => {
		window.scroll(0, 0);
		setModalIsOpen(false);
	};

	const submitForm = (e) => {
		e.preventDefault();
		axios
			.post('https://mern-brothers.herokuapp.com/goods-donation', {
				firstname: firstName,
				lastname: lastName,
				email: email,
				phone: phone,
				type_of_goods: typeOfGoods,
				number_of_pieces: numberOfPieces,
				address: address,
				post_code: postCode,
				instructions_for_the_driver: instructions,
				user_id: userId,
			})
			.then((res) => console.log(res))
			.catch((err) => console.log(err));

		setFirstName('');
		setLastName('');
		setPhone('');
		setEmail('');
		setTypeOfGoods('');
		setNumberOfPieces('');
		setAddress('');
		setPostCode('');
		setInstructions('');
		setModalIsOpen(true);
	};

	return (
		<div>
			<div className="donate-goods-header-container">
				<img
					src={imageHeader}
					alt="Avatar"
					className="donate-goods-header-image"
				/>
				<div className="donate-goods-header-overlay">
					<h1 className="donate-goods-header-text">Donate Goods</h1>
				</div>
			</div>
			<div className="donate-goods-form-container">
				<form onSubmit={submitForm}>
					<div className="donate-goods-form">
						<div className="donate-goods-form-left">
							<div>
								<label>First Name</label>
								<input
									type="text"
									placeholder="Enter your first name"
									value={firstName}
									onChange={(e) => setFirstName(e.target.value)}
									required
								/>
							</div>
							<div>
								<label>Last Name</label>
								<input
									type="text"
									placeholder="Enter your last name"
									value={lastName}
									onChange={(e) => setLastName(e.target.value)}
									required
								/>
							</div>
							<div className="donate-goods-form-contact-no">
								<label>
									Contact Number{' '}
									<span className="donate-goods-form-contact-no-format">
										<i>(Format XXX-XXXX-XXXX)</i>
									</span>
								</label>
								<input
									type="tel"
									className="donate-goods-form-contact-no-input"
									pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}"
									placeholder="Enter contact number"
									value={phone}
									onChange={(e) => setPhone(e.target.value)}
									required
								/>
							</div>
							<div>
								<label>Email Address</label>
								<input
									type="email"
									placeholder="Enter your email address"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									required
								/>
							</div>
							<div>
								<label>
									Type of goods
									<br /> (books,clothes etc.)
								</label>
								<input
									type="text"
									placeholder="Enter type of goods"
									value={typeOfGoods}
									onChange={(e) => setTypeOfGoods(e.target.value)}
									required
								/>
							</div>
							<div>
								<label>Number of Pieces</label>
								<input
									type="number"
									placeholder="Enter number of pieces"
									value={numberOfPieces}
									onChange={(e) => setNumberOfPieces(e.target.value)}
									required
								/>
							</div>
						</div>
						<div className="donate-goods-form-right">
							<div>
								<label>Address</label>
								<textarea
									type="text"
									placeholder="Enter the full address"
									value={address}
									onChange={(e) => setAddress(e.target.value)}
									required
								/>
							</div>
							<div>
								<label>Post Code</label>
								<input
									type="text"
									placeholder="Enter the post code"
									value={postCode}
									onChange={(e) => setPostCode(e.target.value)}
									required
								/>
							</div>
							<div>
								<label>Instructions for the Driver</label>
								<textarea
									type="text"
									placeholder="Enter a clear instruction for the driver "
									value={instructions}
									onChange={(e) => setInstructions(e.target.value)}
									required
								/>
							</div>
						</div>
					</div>
					<div className="donate-goods-form-submit-container">
						<button
							type="submit"
							className="donate-goods-form-submit-btn"
							onClick={() => window.scroll(0, 0)}
						>
							Submit
						</button>
					</div>
				</form>
			</div>

			<Modal
				isOpen={modalIsOpen}
				onRequestClose={() => setModalIsOpen(false)}
				className="donate-goods-form-modal"
			>
				<span className="donate-goods-form-modal-text">
					Thank you! <br />
					Your donation is currently under review. Once approved, you will
					be contacted via email regarding the collection time in your area
				</span>
				<br />
				<br />
				<button
					to="/getinvolved/donategoods-form"
					className="donate-goods-form-btn-popup"
					onClick={() => {
						makeAnotherDonation();
						window.scroll(0, 0);
					}}
				>
					Make Another Donation
				</button>
				<br />
				<Link to="/" className="donate-goods-form-btn-popup">
					Back to Home Page
				</Link>
			</Modal>
		</div>
	);
};

export default DonateGoodsForm;
