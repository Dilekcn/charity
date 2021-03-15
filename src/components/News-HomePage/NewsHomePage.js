import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './NewsHomePage.css';

const NewsHomePage = () => {
	const [posts, setPosts] = useState([]);
	useEffect(() => {
		axios
			.get('http://localhost:4000/posts')
			.then((res) => setPosts(res.data))
			.catch((err) => console.log(err));
	}, []);
	console.log(posts.length);
	return (
		<div id="news-div">
			<span id="newsTitle">The difference you make</span>
			<div id="newsHomePage">
				<div className="news">
					<img
						className="news-img"
						src={posts.length !== 0 && posts[posts.length - 1].postImgId}
						alt="pic"
					/>
					<div className="news-text">
						<h2>{posts.length !== 0 && posts[posts.length - 1].title}</h2>
						<br />
						<br />
						<p>{posts.length !== 0 && posts[posts.length - 1].summary}</p>
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
							<h2>
								{posts.length !== 0 && posts[posts.length - 2].title}
							</h2>

							<br />
							<br />
							<p>
								{posts.length !== 0 && posts[posts.length - 2].summary}
							</p>

							<button className="news-btn">Read More</button>
						</div>
						<img
							className="news-img"
							src={
								posts.length !== 0 && posts[posts.length - 2].postImgId
							}
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
							src={
								posts.length !== 0 && posts[posts.length - 3].postImgId
							}
							alt="pic"
						/>
						<div className="news-text">
							<h2>
								{posts.length !== 0 && posts[posts.length - 3].title}
							</h2>
							<br />
							<br />
							<p>
								{posts.length !== 0 && posts[posts.length - 3].summary}
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
