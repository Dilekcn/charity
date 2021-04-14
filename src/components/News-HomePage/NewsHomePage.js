import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './NewsHomePage.css';
import { Link } from 'react-router-dom';

const NewsHomePage = () => {
	const [posts, setPosts] = useState([]);
	const [medias, setMedias] = useState([]);

	useEffect(() => {
		axios
			.get('http://localhost:4000/posts')
			.then((res) => setPosts(res.data))
			.catch((err) => console.log(err));
	}, []);

	useEffect(() => {
		axios
			.get('http://localhost:4000/medias')
			.then((res) => setMedias(res.data))
			.catch((err) => console.log(err));
	}, []);

	// const postImgId1 = posts[posts.length - 1].post_img_id;
	// const postImgId2 = posts[posts.length - 2].post_img_id;
	// const postImgId3 = posts[posts.length - 3].post_img_id;

	return (
		<div id="news-div">
			<span id="newsTitle">The difference you make</span>

			<div id="newsHomePage">
				<div className="news">
					{medias.map((media) =>
						posts.length !== 0 &&
						media.id === posts[posts.length - 1].post_img_id ? (
							<img
								className="news-img"
								src={media.media_url}
								alt="pic"
							/>
						) : null,
					)}

					<div className="news-text">
						<h2>{posts.length !== 0 && posts[posts.length - 1].title}</h2>

						<p>{posts.length !== 0 && posts[posts.length - 1].summary}</p>

						<Link
							to={`/newsdetail/${
								posts.length !== 0 && posts[posts.length - 1].id
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
								{posts.length !== 0 && posts[posts.length - 2].title}
							</h2>

							<p>
								{posts.length !== 0 && posts[posts.length - 2].summary}
							</p>

							<Link
								to={`/newsdetail/${
									posts.length !== 0 && posts[posts.length - 2].id
								}`}
							>
								<span className="news-btn">Read More</span>
							</Link>
						</div>
						{medias.map((media) =>
							posts.length !== 0 &&
							media.id === posts[posts.length - 2].post_img_id ? (
								<img
									className="news-img"
									src={media.media_url}
									alt="pic"
								/>
							) : null,
						)}
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
						{medias.map((media) =>
							posts.length !== 0 &&
							media.id === posts[posts.length - 3].post_img_id ? (
								<img
									className="news-img"
									src={media.media_url}
									alt="pic"
								/>
							) : null,
						)}

						<div className="news-text">
							<h2>
								{posts.length !== 0 && posts[posts.length - 3].title}
							</h2>

							<p>
								{posts.length !== 0 && posts[posts.length - 3].summary}
							</p>
							<Link
								to={`/newsdetail/${
									posts.length !== 0 && posts[posts.length - 3].id
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
