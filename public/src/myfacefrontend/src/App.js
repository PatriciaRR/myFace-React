import React from 'react';
import './App.scss';
import UserDetail from './UserDetail';
import PostDetail from './PostDetail';
import { BrowserRouter, Routes, Route, Link }  from 'react-router-dom'
import CreateUser from './CreateUser';

function App() {
  
  return (
    <BrowserRouter>
    <div> 
     <Routes>
       <Route path='' element={<nav>
          <Link to="/users"> Users </Link> | {" "}
          <Link to= "/posts" > Posts </Link> | {" "}
          <Link to= "users/create"> Create user </Link>
        </nav>}>
       </Route>
       <Route path='/users' element={<UserDetail />}/>
       <Route path='/posts' element={<PostDetail />}/>
       <Route path= '/users/create' element={<CreateUser />}/>
     </Routes>
    </div> 
    </BrowserRouter>
  );
}

export default App;
