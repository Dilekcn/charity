import React, { useEffect, useState } from 'react';
import imageHeader from '../DonateGoods/Rectangle 26.png';
import './DonateGiftCard.css';
import Modal from 'react-modal';
import { useHistory } from 'react-router';
import axios from 'axios';

// const customStyles = {
// 	content: {
// 		position: 'absolute',
// 		top: '38%',
// 		left: '50%',
// 		right: '50%',
// 		bottom: '60%',
// 		marginRight: '-50%',
// 		marginTop: '120px',
// 		transform: 'translate(-50%, -50%)',
// 		height: 'fit-content',
// 		backgroundColor: '#76A9C7',
// 		padding: '10px',
// 		width: '40%',
// 		fontFamily: 'Roboto',
// 		fontStyle: 'normal',
// 		fontWeight: 'normal',
// 		fontSize: 'large',
// 		lineHeight: '28px',
// 		color: 'white',
// 		marginBottom: '450px',
// 		display: 'flex',
// 		flexDirection: 'column',
// 		justifyContent: 'center',
// 		textAlign: 'center',
// 	},
// };

const GiftCard = () => {
	const [checkbox, setCheckbox] = useState(false);
	const [firstname, setFirstname] = useState('');
	const [lastname, setLastname] = useState('');
	const [type, setType] = useState('');
	const [number, setNumber] = useState('');
	const [code, setCode] = useState('');
	const [balance, setBalance] = useState('');
	const [expiration, setExpiration] = useState('');
	const [postcode, setPostcode] = useState('');
	const [info, setInfo] = useState('');
	const [modalIsOpen, setIsOpen] = React.useState(false);

	const history = useHistory();

	function closeModal() {
		setIsOpen(false);
	}
	function afterOpenModal() {
		// references are now sync'd and can be accessed.
	}

	useEffect(() => {
		window.scroll(0, 0);
	}, []);

	const submit = async (e) => {
		e.preventDefault();
		await axios
			.post('https://mern-brothers.herokuapp.com/gift-card-donation', {
				type_of_card: type,
				card_number: number,
				security_code: code,
				amount: balance,
				expriration_date: expiration,
				post_code: postcode,
				add_info: info,
				user_id: JSON.parse(sessionStorage.getItem('userInfo')).id,
			})
			.then((res) => console.log(res.data))
			.catch((err) => console.log(err));
		setCheckbox(false);
		setType('');
		setNumber('');
		setCode('');
		setBalance('');
		setExpiration('');
		setPostcode('');
		setInfo('');
		setFirstname('')
		setLastname('')
		setIsOpen(true);
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
					<h1 className="donate-goods-text1">Donate With a Gift Card</h1>
				</div>
			</div>
			<div className="giftcard-content">
				<form className="giftcard-form" onSubmit={submit}>
				<div className="giftcard-name">
					<div>
					<label htmlFor="giftcard-type">
							First Name
						</label>
						<input
							required
							value={firstname}
							onChange={(e) => setFirstname(e.target.value)}
							type="text"
							id="giftcard-type"
							name="giftcard-type"w
							placeholder="Enter the type of gift card"
						/>
					</div>
					<div>
					<label htmlFor="giftcard-type">
							Last Name
						</label>
						<input
							required
							value={lastname}
							onChange={(e) => setLastname(e.target.value)}
							type="text"
							id="giftcard-type"
							name="giftcard-type"w
							placeholder="Enter the type of gift card"
						/>

					</div>			
					</div>
					<div className="giftcard-row1">
						<label htmlFor="giftcard-type">
							Please enter the type of gift card: For Example (Amazon,
							Starbucks, Home Depot, Tesco, etc.)
						</label>
						<input
							required
							value={type}
							onChange={(e) => setType(e.target.value)}
							type="text"
							id="giftcard-type"
							name="giftcard-type"w
							placeholder="Enter the type of gift card"
						/>
					</div>
					<div className="giftcard-row2">
						<div>
							<label htmlFor="giftcard-number">
								Please enter the gift card number
							</label>
							<input
								required
								value={number}
								onChange={(e) => setNumber(e.target.value)}
								type="text"
								id="giftcard-number"
								name="giftcard-number"
								placeholder="Enter the gift card number"
							/>
						</div>
						<div>
							<label
								onChange={(e) => setCode(e.target.value)}
								htmlFor="giftcard-security"
							>
								Gift Card security code (PIN,CVV)
							</label>
							<input
								required
								value={code}
								type="password"
								id="giftcard-security"
								name="giftcard-security"
								placeholder="Enter the security code"
								onChange={(e) => setCode(e.target.value)}
							/>
						</div>
					</div>
					<div className="giftcard-row3">
						<div>
							<label htmlFor="giftcard-balance">
								Gift card balance? (Leave blank if unknown.)
							</label>
							<input
								required
								value={balance}
								onChange={(e) => setBalance(e.target.value)}
								type="number"
								id="giftcard-balance"
								name="giftcard-balance"
								placeholder="Enter the balance"
							/>
						</div>
						<div>
							<label htmlFor="giftcard-expiration">
								Card Expiration (MM/YY) (Leave blank if none)
							</label>
							<input
								required
								value={expiration}
								onChange={(e) => setExpiration(e.target.value)}
								type="text"
								id="giftcard-expiration"
								name="giftcard-expiration"
								placeholder="Enter expiration date"
							/>
						</div>
					</div>
					<div className="giftcard-row4">
						<label htmlFor="giftcard-postcode">
							Please enter your post code
						</label>
						<input
							required
							value={postcode}
							onChange={(e) => setPostcode(e.target.value)}
							type="text"
							id="giftcard-postcode"
							name="giftcard-postcode"
							placeholder="Enter your postcode"
						/>
					</div>
					<div className="giftcard-row5">
						<label htmlFor="giftcard-info">
							Please tell us if you have any additional information that
							may help us process your gift card. (optional)
						</label>
						<textarea
							required
							value={info}
							onChange={(e) => setInfo(e.target.value)}
							type="text"
							id="giftcard-info"
							rows="8"
							name="giftcard-info"
							placeholder="Enter additional information"
						/>
					</div>
					<div className="giftcard-row6">
						<input
							required
							type="checkbox"
							className="girtcard-checkbox"
							onChange={(e) => setCheckbox(e.target.checked)}
							checked={checkbox}
						/>
						* By checking this box I affirm and acknowledge that I am
						1)donating my gift card balance to helpinghands.org 2) that no
						goods or services were provided for this donation, and 3) that
						after my donation is processed I will mae a resonable effort
						to preserve donated value by destroying the physical card.
					</div>
					<div className="giftcard-row7">
						<button type="submit">Submit</button>
					</div>
				</form>
			</div>
			<Modal
				isOpen={modalIsOpen}
				// style={customStyles}
				onAfterOpen={afterOpenModal}
				onRequestClose={closeModal}
				contentLabel="Example Modal"
				ariaHideApp={false}
				className="gift-card-modal"
			>
				<p>
					Thank you! You have just made a difference in someone else’s
					life!{' '}
				</p>
				<button className="modal-btn" onClick={() => setIsOpen(false)}>
					Make another donation
				</button>
				<button className="modal-btn" onClick={() => history.push('/')}>
					Back to home page
				</button>
			</Modal>
		</div>
	);
};

export default GiftCard;
