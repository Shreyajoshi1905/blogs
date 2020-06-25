import React from 'react';
import './App.css';
import Home from './containers/Home';
import Header from './components/Header';
import Hero from './components/Hero';
import {BrowserRouter as Router,Switch ,Route} from 'react-router-dom'
import ContactUs from './containers/ContactUS';
import Post from './containers/Post';


class App extends React.Component{

 render(){
  return (
<Router>
  <div className = "App">
       <Header/>
       <Hero/>
      <Route  path ="/" exact component ={Home}/>
       <Route path = "/contact-us" component ={ContactUs}/>
       <Route path = "/post/:postid" component= {Post}/>
      
       
  </div>
  </Router>
  )


 }

}
export default App;
