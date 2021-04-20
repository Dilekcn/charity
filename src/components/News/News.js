import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './News.css';
import axios from 'axios';

const News = () => { 
	// const {id} =useParams();
	const [posts, setPosts] = useState([]);
	const [viewmore, setViewmore] = useState(0);
	useEffect(() => {
		axios
			.get('https://mern-brothers.herokuapp.com/posts')
			.then((res) => setPosts(res.data.docs))
			.catch((err) => console.log(err));
			console.log()
	}, []); 

	const viewMore = () => {
		if (posts.length - 2 <= viewmore) {
			document.querySelector('.allPosts').textContent =
				'No more stories to view...';
		} else {
			setViewmore(viewmore + 2);
		}
	};

	// console.log(posts);
	return (
		<div>
			<div className="newss-bg-img"></div>
			<div className="newss-text">
				<span>
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry's standard dummy text
					ever since the 1500s, when an unknown printer took a galley of
					type and scrambled it to make a type specimen book.{' '}
				</span>
			</div>
			<div className="newss-header">
				<p>Latest News</p>
			</div>
			<table id="news-area">
				<br />
				{posts.length !== 0 &&
					posts
						.slice(posts.length - 2 - viewmore, posts.length)
						.reverse()
						.map((post) => (
							<tr className="news-area">
								<td className="news-area-img">				
											<img src={post.post_img_url} alt="" />						
								</td>

								<td>
									<br />
									<tr className="news-area-header">
										<h2>{post.title}</h2>
									</tr>
									<tr className="news-area-text">
										<br />
										<p> {post.summary}</p>
									</tr>
									<tr className="tr-readmore">
										<Link to={`/newsdetail/${post.id}`} className="news-btn-readmore">
											Read More
										</Link>
									</tr>
								</td>
							</tr>
						))}<br/>
				<tr className="allPosts"></tr>
				<tr className="tr-btn-viewmore">
				
					<button id="news-btn-viewmore" onClick={viewMore}>View More</button>
				</tr>
			</table>
		</div>
	);
};

export default News;