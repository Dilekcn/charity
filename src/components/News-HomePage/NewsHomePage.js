import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './NewsHomePage.css';
import { Link } from 'react-router-dom';

const NewsHomePage = () => {
	const [posts, setPosts] = useState([]);
	

	useEffect(() => {
		axios
			.get('https://mern-brothers.herokuapp.com/posts')
			.then((res) => setPosts(res.data.docs))
			.catch((err) => console.log(err));
	}, []);
 

 

	return (
		<div id="news-div">
			<span id="newsTitle">The difference you make</span>
		

			<div id="newsHomePage">
			
				<div className="news">
				
							<img
								className="news-img"
								src={posts.length !== 0 ? posts[posts.length - 1].post_img_url : undefined}
								alt="pic"
							/>
				
					<div className="news-text">
						<h2>{posts.length !== 0 ? posts[posts.length - 1].title : undefined}</h2>

						<p>{posts.length !== 0 ? posts[posts.length - 1].summary : undefined}</p>

						<Link
							to={`/newsdetail/${
								posts.length !== 0 ? posts[posts.length - 1].id:undefined
							}`}
						>
							<span className="news-btn">Read More</span>
						</Link>
					</div>
				</div>
				<div
					style={{
						height: 30,
						backgroundColor: '#f2f2f2',
					}}
				></div>
				<div>
					<div className="news">
						<div className="news-text">
							<h2>
								{posts.length !== 0 ? posts[posts.length - 2].title:undefined}
							</h2>

							<p>
								{posts.length !== 0 ? posts[posts.length - 2].summary : undefined}
							</p>

							<Link
								to={`/newsdetail/${
									posts.length !== 0 ? posts[posts.length - 2].id:undefined
								}`}
							>
								<span className="news-btn">Read More</span>
							</Link>
						</div>
						<img
								className="news-img"
								src={posts.length !== 0 ? posts[posts.length - 2].post_img_url:undefined}
								alt="pic"
							/>
					</div>
				</div>
				<div
					style={{
						height: 30,
						backgroundColor: '#f2f2f2',
					}}
				></div>

				<div>
					<div className="news">
					<img
								className="news-img"
								src={posts.length !== 0 ? posts[posts.length - 3].post_img_url : undefined}
								alt="pic"
							/>

						<div className="news-text">
							<h2>
								{posts.length !== 0 ? posts[posts.length - 3].title : undefined} }
							</h2>

							<p>
								{posts.length !== 0 ? posts[posts.length - 3].summary : undefined}}
							</p>
							<Link
								to={`/newsdetail/${
									posts.length !== 0 ? posts[posts.length - 3].id : undefined
								}`}
							>
								<span className="news-btn">Read More</span>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NewsHomePage;
