import './SearchResults.css'
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

 
const SearchResults = ({results, searchResults}) => {
	// const {id} =useParams();
	const [posts, setPosts] = useState([])
	const [viewmore, setViewmore] = useState(0);
	useEffect(() => {
        setPosts(searchResults)
	}, [searchResults]);
 
	const viewMore = () => {
		if (posts.length - 2 <= viewmore) {
			document.querySelector('.allPosts').textContent =
				'No more stories to view...';
		} else {
			setViewmore(viewmore + 2);
		}
	};

	return (
		<div>
			
			<div style={{marginTop:"100px"}} className="newss-header">
				<p>Search Results</p>
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

export default SearchResults;
