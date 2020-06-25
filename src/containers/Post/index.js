import React from 'react';
import './style.css'
import Blogpost from '../../components/BlogPost';
import Sidebar from '../../components/sidebar';
 const Post = props =>
 {
   console.log(props);
    return(
        <section className = 'container'>
      <Blogpost {...props}/>
        <Sidebar/>
        </section>
        
    )

 }

 export default Post;