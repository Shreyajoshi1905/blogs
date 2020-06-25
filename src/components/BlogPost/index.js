import React, {useEffect, useState} from 'react';
import './style.css';
import Card from '../UI/Card';
//import blogPost from '../../data/blog.json';

const Blogpost = props =>
{
    /*const[post,setPost] = useState({});

     useEffect(
         () =>{
             const postId = props.match.params.postId;
             const post = blogPost.data.find(post => post.id == postId);
             setPost(post);
         }
     )
   const postId = props.match.params.postId;*/
      return(
        
   <div className = 'blogPost'>
        <Card>
            <div className = 'blogHeader'>
                <span> Featured</span>
                <h1>Kind is the new beautiful</h1>
                <p>posted on June20 , 2020 by Shreya Fashionista</p>
            </div>

    <div className = 'postimageContainer'>
        <img src= {require('../../BlogPostImages/i4.jpg')} alt= "Post image"/>
    </div>


    </Card>

   </div>
        
    )

}
export default Blogpost;