
import React, { useState, useEffect } from 'react'
import "./App.scss"

function UserDetail() {

  const [users, setUsers] = useState(null);


  useEffect(() => {
    fetch("http://localhost:3001/users").then(response => response.json()).then(data => setUsers(data.results));
  }, []) 

  if(!users) {
    return <div> Waiting for user data </div>
  }
  return (
    <div className='container'> 
      {users.map(user => <div className = 'user-name'>
        {user.name} <br />
        {/* {user.email} */}
        {<img className="user-image" alt="user" src={user.profileImageUrl}/>}
    </div>)}
  </div>
  );
}
export default UserDetail;
