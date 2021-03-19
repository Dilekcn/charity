import React, {useState,useEffect}  from "react";
import {Link} from 'react-router-dom'
import "./News.css";
import axios from 'axios';

const News = () => {
// const {id} =useParams();
  const [posts, setPosts] = useState([]);
  const [medias,setMedias] =useState([]);
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

  return (
    <div>
      <div className="newss-bg-img"></div>
      <div className="newss-text">
        <span>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.{" "}
        </span>
      </div>
      <div className="newss-header">
        <p>Latest News</p>
      </div>
      <table id="news-area"><br/>

<tr className="news-area">
    <td className="news-area-img">
    {medias.map(media=>media.id===posts[posts.length - 1].post_img_Id ? 
          <img src={media.media_url} alt=""/>:null
          )} 
    </td>

    <td><br/>
      <tr  className="news-area-header"><h2>header</h2></tr>
      <tr  className="news-area-text"><br/><p> {posts.length !==0 && posts[posts.length-1].summary}</p>
      </tr>
      <tr className="tr-readmore" ><Link to={`/newsdetail/${posts.length !== 0 && posts[posts.length - 1].id}`} className="news-btn-readmore">Read More</Link></tr>

    </td>
   
</tr>
{/* <tr style={{width:100}}></tr> */}
<tr className="news-area">
    <td className="news-area-img">
    {medias.map(media=>media.id===posts[posts.length - 2].post_img_Id ? 
          <img src={media.media_url} alt=""/>:null
          )} 
    </td>

    <td><br/>
      <tr  className="news-area-header"><h2>header</h2></tr>
      <tr  className="news-area-text"><br/><p> {posts.length !==0 && posts[posts.length-2].summary}</p>
      </tr>
      <tr className="tr-readmore" ><Link to={`/newsdetail/${posts.length !== 0 && posts[posts.length - 2].id}`} className="news-btn-readmore">Read More</Link></tr>

    </td>
</tr>
 <tr className="tr-btn-viewmore"> <button id="news-btn-viewmore">View More</button></tr>
      </table>
      
    </div>
  );
};

export default News;
