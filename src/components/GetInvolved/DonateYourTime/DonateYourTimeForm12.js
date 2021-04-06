import React, {useState,useEffect} from "react";
import "./DonateYourTimeForm.css";
import Modal from 'react-modal';
import { Link, useHistory } from 'react-router-dom';


const DonateYourTimeForm = ({isLoggedIn}) => {
  
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [fullname,setFullname] =useState('');
  const [email, setEmail]=useState('');
  const [phone, setPhone]=useState('');
  const [based,setBased] =useState('');
  const [text,setText] =useState('');
  const [text1,setText1]=useState('');
  const history = useHistory()

  const submitForm = (e) => {
		setFullname('');
    if(!isLoggedIn) {
      history.push('/login')
      return
    }
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
          <form  onSubmit={submitForm}>
            <div id="time_container">
            <div className="time_container">
                <div className="time_name">
                <label for="fullname">Full Name</label><br/>
                 <input value={fullname} onChange={(e)=>setFullname(e.target.value)} type="text" id="fullname" name="fullname"/>
                </div>
<br/>
                <div className="time_email">
                <label for="email">Email</label><br/>
                 <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" id="email" name="email"/>
                </div>
            </div>
<br/>
            <div className="time_container_right">
                <div className="time_number"><br/>
                <label for="number">Contact Number</label><br/>
                 <input  value={phone} onChange={(e)=>setPhone(e.target.value)}  type="phone" id="number" name="number"/>
                </div>
<br/>
                <div className="time_based">
                <label for="based">Where are you based?</label><br/>
                 <input  value={based} onChange={(e)=>setBased(e.target.value)}  type="text" id="based" name="based"/>
                </div>

            </div>

            <div className="time_text">
                <label for="text">What particular areas are you willing to contribute to or interest you the most?</label> <br/> <br/>
                <textarea value={text} onChange={(e)=>setText(e.target.value)} type="text" id="text" name="text" />
            </div>
           
            <div className="time_text2">
                <label for="text2">Other thoughts or comments
</label>  <br/> <br/>
                <textarea  value={text1} onChange={(e)=>setText1(e.target.value)}  type="textarea" id="text2" name="text2" rows="10" cols="50"/>
            </div>
            
<div className="time_submit"> <button type="submit" className="time_submit_sub">Submit</button></div>
            </div>

          </form>
      </div>
      <Modal
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
						width: '40%',
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
