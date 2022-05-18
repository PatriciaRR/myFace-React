
import './App.css';
// import React, { useState, useEffect } from 'react'
import UserDetail from './UserDetail';
import PostDetail from './PostDetail';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  
  return (
    <BrowserRouter>
    <div> 
     <Routes>
       <Route path=''> 
        <h1> Welcome </h1>
        <link to="/users" />
        <link to= "/posts" />
       </Route>
       <Route path='/users'> <UserDetail /> </Route>
       <Route path='/posts'> <PostDetail /> </Route>
     </Routes>
    </div> 
    </BrowserRouter>
  );

}

export default App;
