import React from 'react';
import imageHeader from './Rectangle 26.png';
import './DonateGoodsForm.css';

const DonateGoodsForm = () => {
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
							<label>Name</label>
							<input type="text" required />
						</div>
						<div>
							<label>Contact Number</label>
							<input type="text" required />
						</div>
						<div>
							<label>Email Address</label>
							<input type="email" required />
						</div>
						<div>
							<label>Type of goods (books,clothes etc.)</label>
							<input type="text" required />
						</div>
						<div>
							<label>Number of Pieces</label>
							<input type="text" required />
						</div>
						<div>
							<label>Upload Photos</label>
							<input type="text" required />
						</div>
					</form>
				</div>

				<div className="donate-goods-form-container-right"></div>
			</div>
		</div>
	);
};

export default DonateGoodsForm;
