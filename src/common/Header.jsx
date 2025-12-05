import './Header.css'
import { useState } from "react";
import { Link } from 'react-router-dom';
export default function Header(){
    const [location,setLocation]=useState('Pune')
    return(
    <header className='header'>
      <div className='top-row'>
      <div className='logo'><Link to="/"><img src="/bookmyshow-logo.png" width={"100px"}/></Link></div> 
      <div className='search-box'>
        <input type='text' name="search"/>  
      </div>
      <div className="right-section">
         <div className="location">
            {location} 
          </div>
      <button className='signin'>SignUp</button>
      </div>
      </div>
      
       <nav className="menu-row">
        <div className="menu-left">
          <Link to="/movies">Movies</Link>
          <Link to="/stream">Stream</Link>
          <Link to="/events">Events</Link>
          <Link to="/sports">Sports</Link>
          <Link to="/activities">Activities</Link>
          <Link to="/buzz">Buzz</Link>
        </div>
        <div className="menu-right">
          <a>List Your Show</a>
          <a>Corporates</a>
          <a>Offers</a>
          <a>Gift Cards</a>
        </div>
        
      </nav>
      
    </header>
        )}        
