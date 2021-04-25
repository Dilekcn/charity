import React, { useEffect } from 'react';

import './DonateYourTime.css';
import { Link } from 'react-router-dom';

const DonateYourTime = ({ isLoggedIn }) => {
	useEffect(() => {
		window.scroll(0, 0);
	}, []);
	return (
		<div id="donate_your_time">
			<div className="donate_your_time">
				<div className="donete_your_time_title">
					<p>Donate Your Time</p>
				</div>
			</div>
			<div className="donate_your_time_container">
				<div className="donate_time_title">
					<p>Volunteer with us</p>
				</div>
				<div className="donate_time_part1">
					<div className="donate_time_img1">
						<img src="https://i.postimg.cc/k4DvG139/ebbdb21ddc800ebc3b80781a9cb4659a.jpg"  alt=""/>
					</div>
					<div className="donate_time_text1">
						<p>
							Are the children doing their own thing now and you’ve
							suddenly got more time? Are the children doing their own thing now and you’ve
							suddenly got more time?Are the children doing their own thing now and you’ve
							suddenly got more time?
						</p>
					</div>
				</div>
				<br />
				<div className="donate_time_part2">
					<div className="donate_time_text2">
						<p>
							Has being in lockdown got you thinking about the great
							skills you have and putting them to good use to help
							others? After all, the best gift you can give is your time.Has being in lockdown got you thinking about the great
							skills you have and putting them to good use to help
							others? After all, the best gift you can give is your time.
						</p>
					</div>
					<div className="donate_time_img2">
						<img src="https://i.postimg.cc/brDgC63L/8033aab42f07550d2ccb521536413a65.jpg" alt="" />
					</div>
				</div>
				<br />
				<div className="donate_time_part3">
					<p>
						Whatever your age or skills, however much time you can give,
						we’ve got a volunteer role for you. Use your skills and join a
						great team whose values match your own. Whatever your age or skills, however much time you can give,
						we’ve got a volunteer role for you. Use your skills and join a
						great team whose values match your own.
					</p>
				</div>
				<br />
				<div className="donate_time_btn">
					<Link
						to={
							isLoggedIn ? '/getinvolved/donateyourtime-form' : '/login'
						}
						className="donate_time_your_btn"
					>
						Apply
					</Link>
				</div>
			</div>
		</div>
	);
};

export default DonateYourTime;
