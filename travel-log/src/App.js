import './App.css';
import React from 'react';
import {BrowserRouter,Routes,Route,} from "react-router-dom";
import Login from './components/Login';
import Signup from './components/Signup';
import Experience from './components/Experience';
import Post from './components/Post';
import ExperienceDetails from './components/ExperienceDetails';
import Search from './components/Search';
import UserProfile from './components/UserProfile';
import UpdateExp from './components/UpdateExp';

function App() {
  return (
    <>
    <BrowserRouter>
           <Routes>
             <Route path = "/" element = {<Login/>}/>
             <Route path = "/signup" element = {<Signup/>}/>
             <Route path = "/experience" element = {<Experience/>}/>
             <Route path = "/post" element = {<Post/>}/>
             <Route path = "/experienceDetails/:id" element = {<ExperienceDetails/>}/>
             <Route path = "/search/:country" element = {<Search/>}/>
             <Route path = "/userprofile/:username" element = {<UserProfile/>}/>
             <Route path = "/updateexp/:id" element = {<UpdateExp/>}/>
           </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
