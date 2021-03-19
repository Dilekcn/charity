import React,{useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios';

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
        <div style={{height:'700px',margin:"110px"}}>
            {medias.map(media=>media.id===post.post_img_Id ? <img src={media.media_url} alt='top'style={{height:"500px",width:"100%"}} />:null )}
            <h1>{post.title}</h1> 
            {medias.map(media=>media.id===post.donatee_img_id ? <img src={media.media_url} alt='top'style={{height:"100px",width:"100px"}} />:null )}
    </div>
    )
}
