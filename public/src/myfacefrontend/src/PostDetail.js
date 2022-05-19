import React, { useState, useEffect } from 'react'
import "./App.scss"
import UserDetail from './UserDetail';

function PostDetail() {
    const [posts, setPosts] = useState(null);
  
    useEffect(() => {
      fetch("http://localhost:3001/posts").then(response => response.json()).then(data => setPosts(data.results));
    }, [])
  
    if(!posts) {
      return <div> Waiting for data </div>
    }
    return (
     <div className="container"> 
       {posts.map(post => <div className='post-message'>
        {post.message} <br />
        {<img className = "post-image" alt= "post" src={post.imageUrl} />} 
        {<button type="Like"> Like </button>}
        {<button type="Dislike"> Dislike </button>}
       
        </div>)}
      </div> 
    );

}  

export default PostDetail;