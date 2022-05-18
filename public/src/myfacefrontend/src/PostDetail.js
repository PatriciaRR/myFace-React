import React, { useState, useEffect } from 'react'

function PostDetail() {
    const [posts, setPosts] = useState(null);
  
    useEffect(() => {
      fetch("http://localhost:3001/posts").then(response => response.json()).then(data => setPosts(data.results));
    }, [])
  
    if(!posts) {
      return <div> Waiting for data </div>
    }
    return (
     <div> 
       {posts.map(post => <div className='post-message'>
        {post.message}
        {/* <img className = "post-image" alt= "post" src={post.imageUrl} /> */}
        </div>)}
      </div> 
    );

}  

export default PostDetail;