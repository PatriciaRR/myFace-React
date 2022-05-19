import { body } from "express-validator";
import React, { useState , useEffect } from "react";

function CreateUser () {

    const [name, setName] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")

    function submitNewUserForm(e) {
    e.preventDefault();
    // fetch("http://localhost:3001/users/create", { 
    //         method: "post"
    //         body: {
    //             // JSON stringify
    //         }
    }

    return ( <div>
        <h1>Create User</h1>
        <form onSubmit={submitNewUserForm}>
            <label>
                Name:
                <input type="text" name="name" onChange={(e) => setName(e.target.value)}/>
            </label>
            <label>
                Username:
                <input type="text" name="username" onChange={(e) => setUsername(e.target.value)}/>
            </label>
            <label>
                Email:
                <input type="email" name="email" onChange={(e) => setEmail(e.target.value)}/>
            </label>
            <label>
                ProfileImageUrl:
            <   input type="text" name="profileImageUrl"/>
            </label>
            <label>
                CoverImageUrl:
                <input type="text" name="coverImageUrl"/>
            </label>
            <button type="submit">Submit</button> 
        </form>
    </div>

    )
}
export default CreateUser;