import React from 'react';
import './App.scss';
import UserDetail from './UserDetail';
import PostDetail from './PostDetail';
import { BrowserRouter, Routes, Route, Link }  from 'react-router-dom'

function App() {
  
  return (
    <BrowserRouter>
    <div> 
     <Routes>
       <Route path='' element={<nav>
          <Link to="/users"> Users </Link> | {" "}
          <Link to= "/posts" > Posts </Link> 
        </nav>}>
       </Route>
       <Route path='/users' element={<UserDetail />}/>
       <Route path='/posts' element={<PostDetail />}/>
     </Routes>
    </div> 
    </BrowserRouter>
  );
}

export default App;
