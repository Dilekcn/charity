import React, {useEffect} from 'react';
import imageHeader from '../DonateGoods/Rectangle 26.png';
import "./Ambassador.css";
import { Link } from 'react-router-dom';

const Ambassador = () => {
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
					<h1 className="donate-goods-text">Be an ambassador</h1>
				</div>
			</div>
      <div className="contentAmb">
        <p className="contentAmb1-p">
         <p>Ambassador Program</p> 
    <br/>
        <p>We at Helping Hands are passionate and excited about providing a platform for people to get engaged and inspired to be part of making a difference in the lives of others. Being part of this program will allow you the opportunity to have a say, make your voice count, and participate in new opportunities:</p>  
        <br/>
        <ul>
          <li>- organising local and global initiatives to connect other people to HH’s amazing cause</li>
          <li>-sharing your story through online blogs and social media</li> <br/>
          <li>-involvement in fundraising and awareness challenges</li>
          <li>-dialogue and interaction with other  people through regular calls and online forums</li>
          <li>-learning and engaging through awareness trips to partner locations overseas</li>
        </ul>
      <br/>
      <p>Our committee is currently looking for ambassadors to join our cause! Please consider applying. We look forward to having you on board!</p>
       </p>
       <br/>
       <div>
					<Link
						to="/getinvolved/donategoods-form"
						className="apply-btn-Amb"
					>
						Apply
					</Link>
				</div>
      </div>
      
    </div>
  )
}

export default Ambassador;