import React, { useEffect, useState } from 'react';
import imageHeader from '../DonateGoods/Rectangle 26.png';
import './AmbassadorForm.css';
import Modal from 'react-modal'
import {useHistory} from 'react-router';

const customStyles = {
    content : {
      position              : 'absolute',
      top                   : '38%',
      left                  : '50%',
      right                 : '50%',
      bottom                : '60%',
      marginRight           : '-50%',
      marginTop             : '120px',
      transform             : 'translate(-50%, -50%)',
      height                : 'fit-content',
      backgroundColor       : '#76A9C7',
      padding               : '10px',
      width                 : '40%',
      fontFamily            : 'Roboto',
      fontStyle             : 'normal',
      fontWeight            : 'normal',
      fontSize              : 'large',
      lineHeight            : '28px',
      color                 : 'white',
      marginBottom          : '450px',
      display               : 'flex',
      flexDirection : 'column',
      justifyContent : 'center',
      textAlign : 'center'
    }
  };

const AmbassadorForm = () => {
	const [ name, setName ] = useState('');
	const [ number, setNumber ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ city, setCity ] = useState('');
	const [ reason, setReason ] = useState('');
	const [ particular, setParticular ] = useState('');
	const [ comment, setComment ] = useState('');
  const [modalIsOpen,setIsOpen] = React.useState(false);

    const history = useHistory()

    function closeModal(){
        setIsOpen(false);
      }
    function afterOpenModal() {
        // references are now sync'd and can be accessed.
      }

	useEffect(() => {
		window.scroll(0, 0);
	}, []);

	const submit = (e) => {
		e.preventDefault();
		setName('');
		setNumber('');
		setEmail('');
		setCity('');
		setReason('');
		setParticular('');
		setComment('');
    setIsOpen(true);
	};

	return (
		<div>
			<div className="donate-goods-container">
				<img src={imageHeader} alt="Avatar" className="donate-goods-image" />
				<div className="donate-goods-overlay">
					<h1 className="donate-goods-text1">Be an Ambassador</h1>
				</div>
			</div>
			<div className="ambassador-form-content">
				<form className="ambassador-form" onSubmit={submit}>
					<div className="ambassador-row1">
            <div>
            <label htmlFor="ambassador-name">
							Full Name
						</label>
            <input
							required
							value={name}
							onChange={(e) => setName(e.target.value)}
							type="text"
							id="ambassador-name"
							name="ambassador-name"
							placeholder="Enter your name and surname"
						/>
            </div>
						<div>
            <label htmlFor="ambassador-contact">
							Contact Number
						</label>
						<input
							required
							value={number}
							onChange={(e) => setNumber(e.target.value)}
							type="tel"
							id="ambassador-contact"
							name="ambassador-contact"
							placeholder="Enter your contact number"
						/>
            </div>
						
            
					</div>
					<div className="ambassador-row2">
						<div>
							<label htmlFor="ambassador-email">Email</label>
							<input
								required
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								type="email"
								id="ambassador-email"
								name="ambassador-email"
								placeholder="Enter your email address"
							/>
						</div>
						<div>
							<label htmlFor="ambassador-based">
								Where are you based?
							</label>
							<input
								required
								value={city}
								type="text"
								id="ambassador-based"
								name="ambassador-based"
								placeholder="Enter the city name"
                                onChange={(e) => setCity(e.target.value)}
							/>
						</div>
					</div>
					<div className="ambassador-row3">
						<div>
							<label htmlFor="ambassador-reason">Why do you want to join us?</label>  <br/>
							<textarea
								required
								value={reason}
								onChange={(e) => setReason(e.target.value)}
								type="text"
								id="ambassador-reason"
								name="ambassador-reason"
							/>
						</div>
						<div>
							<label htmlFor="ambassador-particular">What particular areas are you willing to contribute to or interest you the most?</label>
							<textarea
								required
								value={particular}
								onChange={(e) => setParticular(e.target.value)}
								type="text"
								id="ambassador-particular"
								name="ambassador-particular"
							/>
						</div>
					</div>
					<div className="ambassador-row5">
						<label htmlFor="ambassador-comment">
            Other thoughts or comments(optional):
						</label>
						<textarea
							value={comment}
							onChange={(e) => setComment(e.target.value)}
							type="text"
							id="ambassador-comment"
							rows="8"
							name="ambassador-comment"
						/>
					</div>
					
					<div className="ambassador-row7">
						<button type="submit">Submit</button>
					</div>
				</form>
			</div>
			<Modal
				isOpen={modalIsOpen}
				style={customStyles}
				onAfterOpen={afterOpenModal}
				onRequestClose={closeModal}
				contentLabel="Example Modal"
			>
				<p>Thank you! You have just made a difference in someone else’s life! </p>
                <button className="modal-btn" onClick={() => history.push('/')}>Back to home page</button>
			</Modal>
		</div>
	);
};

export default AmbassadorForm;
