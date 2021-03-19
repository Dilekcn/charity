import React,{useState,useEffect} from "react";
import {Link} from 'react-router-dom'
import axios from 'axios'

import "./News.css";

const News = () => {
 
const[posts,setPosts]=useState([])
const[medias,setMedias]=useState([])

  useEffect(() => {
    axios.get(`http://localhost:4000/posts`)
    .then(res=>{ 
        setPosts(res.data)
    })
    .catch(err=>{
        console.log(err)
    })
}, [])

useEffect(() => {
  axios.get(`http://localhost:4000/medias`)
  .then(res=>{ 
      setMedias(res.data)
  })
  .catch(err=>{
      console.log(err)
  })
}, [])

console.log(posts)

  return (
    <div>
      <div className="newss-bg-img"></div>
      <div className="newss-text">
        <span>
          Sabit bir soz
        </span>
      </div>
      <div className="newss-header">
        <p>Latest News</p>  
      </div>
      <div className="news-area">
        <div className="first-news">
          
          {posts.length !== 0 && posts[posts.length - 1].summary}  
          {medias.map(media=>media.id===posts[posts.length - 1].post_img_Id ? 
          <img src={media.media_url} alt=""/>:null
          )} 
          <Link to={`/newsdetail/${posts.length !== 0 && posts[posts.length - 1].id}`}  className="news-btn-readmore">Read More</Link>
        </div>
        <div className="first-news">
          {/* <Link to={`/newsdetail`}  className="news-btn-readmore">Read More</Link> */}
        </div>
        <div>
          {/* <button id="news-btn-viewmore">View More</button> */}
        </div>
      </div>
    </div>
  );
};

export default News;
