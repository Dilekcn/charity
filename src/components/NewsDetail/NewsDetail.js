import React,{useEffect,useState,useLayoutEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios';
import './NewsDetail.css'
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import ckeditor from '@ckeditor/ckeditor5-react';


export default function NewsDetail() {

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
       }, [])
    
    const{id}=useParams()
    const[post,setPost]=useState([])
 
    useEffect(() => {
        axios.get(`https://mern-brothers.herokuapp.com/posts/${id}`)
        .then(res=>{ 
            setPost(res.data)
           
        })
        .catch(err=>{
            console.log(err)
        })
    }, [id])

    
 

    return (
        <div>
            <div className="slider-container">
                    <div style={{backgroundImage:`url(${post.post_img_url})`,paddingTop:"50px",height:"575px", backgroundPosition: 'center',backgroundSize: 'cover',backgroundRepeat: 'no-repeat'}}></div> 
                    <img className="donatee-img"src={post.donatee_img_url} alt='donatee'/>

                    <p className="quote">
                        <span>"{post.donatee_desc}"</span>
                        <br/>
                        <span className="donatee-name">{post.donatee_name}</span>
                    </p>
            </div>
            <div className="title-summary" >
                    <h1> {post.title}</h1>
                    <p> {post.summary}</p>
            </div>
            <div className="content-1">
                <img className="content-1-img" src={post.content_img_1} alt="body_img" />
                <p className="content-1-text">{post.content_1}</p>
            </div>
            <div className="content-2">
                <p className="content-2-text">{post.content_2}</p>
            </div>
            <div className="content-3">
                 <p className="content-3-text">{post.content_3}</p>
                 <img className="content-2-img" src={post.content_img_2} alt="body_img"/>
            </div>
            <div>
                <p className="content-4-text">{post.content_4}</p>
            </div>
           
            
        </div>
    )
}
 