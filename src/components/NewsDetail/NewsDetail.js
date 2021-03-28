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
    const[medias,setMedias]=useState([])
 
    useEffect(() => {
        axios.get(`http://localhost:4000/posts/${id}`)
        .then(res=>{ 
            setPost(res.data)
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


    return (
        <div>
            <div className="slider-container">
                    {medias.map(media=>media.id===post.post_img_Id ? <div style={{backgroundImage:`url(${media.media_url})`,paddingTop:"50px",height:"575px", backgroundPosition: 'center',backgroundSize: 'cover',backgroundRepeat: 'no-repeat'}}></div> : null)}
                    {medias.map(media=>media.id===post.donatee_img_id ? <img className="donatee-img"src={media.media_url} alt='donatee'/>:null)}

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
            <div style={{fontSize:"90px",color:"#347ca5",textAlign:"center",marginBottom:"200px"}}>
               CONTENT FROM CK EDITOR
            </div>
            
        </div>
    )
}
 