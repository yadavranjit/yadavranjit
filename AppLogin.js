import React from 'react'
import {useState} from 'react';
// import Login from '../AppLogin/';
function AppLogin() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
   


    return (
        <div className="container">
            <div className="row">
                <div className="card col-5 m-auto p-5">
                <h2>Log in Page</h2>
            <input type="text" placeholder="username" value={name} onChange={(e) => setName(e.target.value)}/>
            <br></br>
            <input type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <br></br>
            <input type="text" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <br></br>
            <input className="bg-success border-none" type="button" value="Log In"></input>
                </div>
            </div>
        </div>
    )
}

export default AppLogin
