import React from 'react';
import './NewsHomePage.css';

const NewsHomePage = () => {
	return (
		<div id="news-div">
			<span id="newsTitle">The difference you make</span>
			<div id="newsHomePage">
				<div className="news">
					<img
						className="news-img"
						src="https://picsum.photos/200/300"
						alt="pic"
					/>
					<div className="news-text">
						<h2>Lorem</h2>
						<br />
						<br />
						<p>
							Lorem Lorem Ipsum is simply dummy text of the printing and
							typesetting industry. Lorem Ipsum has been the industry's
							standard dummy text ever since the 1500s, when an unknown
							printer took a galley of type and scrambled it to make a
							type specimen book.
						</p>
						<button className="news-btn">Read More</button>
					</div>
				</div>
				<div
					style={{
						height: 30,
						backgroundColor: 'rgba(229, 229, 229, 0.42)',
					}}
				></div>
				<div>
					<div className="news">
						<div className="news-text">
							<h2>Lorem</h2>
							<br />
							<br />
							<p>
								Lorem Lorem Ipsum is simply dummy text of the printing
								and typesetting industry. Lorem Ipsum has been the
								industry's standard dummy text ever since the 1500s,
								when an unknown printer took a galley of type and
								scrambled it to make a type specimen book.
							</p>
							<button className="news-btn">Read More</button>
						</div>
						<img
							className="news-img"
							src="https://picsum.photos/200/300"
							alt="pic"
						/>
					</div>
				</div>
				<div
					style={{
						height: 30,
						backgroundColor: 'rgba(229, 229, 229, 0.42)',
					}}
				></div>

				<div>
					<div className="news">
						<img
							className="news-img"
							src="https://picsum.photos/200/300"
							alt="pic"
						/>
						<div className="news-text">
							<h2>Lorem</h2>
							<br />
							<br />
							<p>
								Lorem Lorem Ipsum is simply dummy text of the printing
								and typesetting industry. Lorem Ipsum has been the
								industry's standard dummy text ever since the 1500s,
								when an unknown printer took a galley of type and
								scrambled it to make a type specimen book.
							</p>
							<button className="news-btn">Read More</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NewsHomePage;
