import React from 'react';
import './style.css';
import Card from '../UI/Card';

const Sidebar = props =>
{
    return(
        <div className = "sidebarContainer">
        <Card  style ={{marginBottom: '20px' , padding: '20px' , boxSizing: 'border-box'}} >
           <div className ="cardHeader">
             <span>
                ABOUT-US
             </span>
           </div>
           <div className = 'profileImageContainer'>
           <img src = {require('../../myPhoto/s1.jpg')} alt = "Post Image"/>
           </div>
           <div className= "textdesign">
           <p>
          Heyy there!! My name is Shreya Joshi and i am a student of Birla Institute Of Applied Sciences.
          I am 20 years old .
           </p>
           </div>
        </Card>

        <Card style= {{marginBottom: '20px', padding: '20px' , boxSizing:'border-box'}}>
            <div className = "cardHeader">
                <span>
                    SOCIAL-NETWORKING
                </span>

            </div>

        </Card>
        <Card style = {{marginBottom: '20px' , padding: '20px', boxSizing: 'border-box'}}>
            <div className="cardHeader">
                <span>
                RECENT-POSTS
                </span>
            </div>

            <div className = 'recentpost'>
                <div className = 'recentposts'>
                 <h3>Post Title</h3>
                 <span> June 21 , 2020</span>
                </div>

                <div className = 'recentposts'>
                <h3>Post Title</h3>
                <span> June 21 , 2020</span>
               </div>
            </div>
        </Card>


        </div>
    )
}

export default Sidebar;