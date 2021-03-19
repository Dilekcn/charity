import React,{useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios';
import './NewsDetail.css'

export default function NewsDetail() {
    
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

                    {medias.map(media=>media.id===post.post_img_Id ? <img className="slider-img" src={media.media_url} alt='slider'/>:null )}
                    {medias.map(media=>media.id===post.donatee_img_id ? <img className="donatee-img"src={media.media_url} alt='donatee'/>:null)}

                    <p className="quote">
                        <span>"{post.donatee_desc}"</span>
                        <br/>
                        <span className="donatee-name">{post.donatee_name}</span>
                    </p>
            </div>
            <div style={{height:"500px"}}>

            </div>
            
        </div>
    )
}
