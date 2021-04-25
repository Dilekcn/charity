import React, { useEffect } from 'react';
import './DonateGoods.css';
import imageHeader from './Rectangle 26.png';
import image2 from './nick-de-partee-5DLBoEX99Cs-unsplash 1 (1).png';
import image1 from './nick-de-partee-5DLBoEX99Cs-unsplash 1.png';
import Modal from 'react-modal';
import { Link} from 'react-router-dom';

const customStyles = {
	content: {
		position: 'absolute',
		top: '38%',
		left: '50%',
		right: '50%',
		bottom: '60%',
		marginRight: '-50%',
		marginTop: '120px',
		transform: 'translate(-50%, -50%)',
		height: 'fit-content',
		backgroundColor: '#76A9C7',
		padding: '10px',
		width: '40%',
		fontFamily: 'Roboto',
		fontStyle: 'normal',
		fontWeight: 'normal',
		fontSize: 'large',
		lineHeight: '28px',
		color: 'white',
		marginBottom: '450px',
	},
};

const DonateGoods = ({ isLoggedIn }) => {
	const [modalIsOpen, setIsOpen] = React.useState(false);
	// const history = useHistory();

	function closeModal() {
		setIsOpen(false);
	}
	function afterOpenModal() {
		// references are now sync'd and can be accessed.
	}

	useEffect(() => {
		window.scroll(0, 0);
	}, []);

	return (
		<div className="donate-goods">
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
			<div className="content">
				<div className="content1">
					<img className="image-1" src={image1} alt="" />
					<div className="content1-p">
						Just because you no longer need an item, don’t throw it away.
						By donating it to us you’re not only keeping it out of
						landfill, but you’re also making sure it goes to a new home,
						while also doing something to help others. To donate, please
						fill in the form at the link below and our team will get back
						to you. Take a look at the information on this page to see
						what we can and cannot accept as gifts.
					</div>
				</div>
				<div className="content2">
					<div className="content2-p">
						<h4>What we can and can't collect</h4> It goes without saying
						that we need to be able to re-sell items, but if a piece of
						furniture is a little bit battered and worn we can sometimes
						give it a new lease of life in our upcycling workshops. <br />
						<p className="content2-p2" onClick={() => setIsOpen(true)}>
							Find out what you can donate?
						</p>
					</div>
					<img className="image-2" src={image2} alt="" />
				</div>
				<div className="donate-goods-btn-div">
					<Link
						to={isLoggedIn ? '/getinvolved/donategoods-form' : '/login'}
						className="donate-goods-btn"
					>
						Donate Goods Now
					</Link>
				</div>
			</div>
			<Modal
				isOpen={modalIsOpen}
				style={customStyles}
				onAfterOpen={afterOpenModal}
				onRequestClose={closeModal}
				contentLabel="Example Modal"
				className="donate-goods-modal"
			>
				Our chain of 600 shops are all really grateful for any of the below
				donations. They fly off our shelves and help us raise vital funds.
				<br />
				<br />
				-Men’s, women’s and children’s clothing <br />
				-Accessories including shoes, belts, handbags and jewellery <br />
				-Quality homeware - anything from cushions to crockery <br />
				-Linens <br />
				-Books, CDs, DVDs <br />
				-Electricals and furniture. Please check with your local shop before
				you donate these. Furniture and soft furnishings can only be
				accepted if they are new, and if they meet fire safety standards.{' '}
				<br />
				-Please note that we cannot accept used household items (including
				electrical items). <br />
				-Unfortunately, there are a few things that we can't sell - white
				goods such as washing machines and fridges and damaged or broken
				toys. <br />
			</Modal>
		</div>
	);
};

export default DonateGoods;
