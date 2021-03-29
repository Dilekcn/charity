import React, { useState, useEffect } from 'react';
import imageHeader from './Rectangle 26.png';
import './DonateGoodsForm.css';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';

const DonateGoodsForm = () => {
	const [modalIsOpen, setmodalIsOpen] = useState(false);

	useEffect(() => {
		window.scroll(0, 0);
	}, []);

	return (
		<div>
			<div className="donate-goods-container">
				<img
					src={imageHeader}
					alt="Avatar"
					className="donate-goods-image"
				/>
				<div className="donate-goods-overlay">
					<h1 className="donate-goods-text">Donate Goods</h1>
				</div>
			</div>
			<div className="donate-goods-form-container">
				<div className="donate-goods-form-left">
					<form className="donate-goods-form-left">
						<div>
							<label>Full Name</label>
							<input
								type="text"
								placeholder="Enter your full name"
								required
							/>
						</div>
						<div>
							<label>Contact Number</label>
							<input
								type="text"
								placeholder="Enter contact number"
								required
							/>
						</div>
						<div>
							<label>Email Address</label>
							<input
								type="email"
								placeholder="Enter your email address"
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
								required
							/>
						</div>
						<div>
							<label>Number of Pieces</label>
							<input
								type="text"
								placeholder="Enter number of pieces"
								required
							/>
						</div>
					</form>
				</div>

				<div className="donate-goods-form-right">
					<div>
						<label>Address</label>
						<textarea
							type="text"
							placeholder="Enter the full address"
							required
						/>
					</div>
					<div>
						<label>Post Code</label>
						<input
							type="text"
							placeholder="Enter the post code"
							required
						/>
					</div>
					<div>
						<label>Instructions for the Driver</label>
						<textarea
							type="email"
							placeholder="Enter a clear instruction for the driver "
							required
						/>
					</div>
				</div>
			</div>
			<div className="donate-goods-form-submit-container">
				<button
					className="donate-goods-form-submit-btn"
					onClick={() => setmodalIsOpen(true)}
				>
					Submit
				</button>
			</div>
			<Modal
				isOpen={modalIsOpen}
				onRequestClose={() => setmodalIsOpen(false)}
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
						width: '50%',
						padding: '60px',
						textAlign: 'center',
						lineHeight: 1.8,
					},
				}}
			>
				Thank you! Your donation is currently under review.Once approved,
				you will be contacted via email regarding the collection time in
				your area.
				<br />
				<br />
				<button
					to="/getinvolved/donategoods-form"
					className="donate-goods-form-btn-popup"
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
