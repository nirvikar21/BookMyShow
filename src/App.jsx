import { useState } from 'react'
import {Routes,Route} from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import Events from './pages/Events';
import Movies from './pages/Movies';
import Stream from './pages/Stream';
import Sports from './pages/Sports';
import AboutMovie from './pages/AboutMovie';
import Activities from './pages/Activities';
import Buzz from './pages/Buzz';
import Login from './pages/Login';
import Profile from './pages/Profile/Profile'


function App() {
  
  return (
    <>
        <Routes>
          <Route path="" element={<Home/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/movies" element={<Movies/>}/>
          <Route path="/stream" element={<Stream/>}/>
          <Route path="/events" element={<Events/>}/>
          <Route path="/sports" element={<Sports/>}/>
          <Route path="/activities" element={<Activities/>}/>
          <Route path="/buzz" element={<Buzz/>}/>
          <Route path="/AboutMovie/:title" element={<AboutMovie />} />
          <Route path="/login" element={<Login/>}/>
          <Route path= "/profile" element={<Profile/>}/>
        </Routes>
        
    </>
  )
}

export default App
