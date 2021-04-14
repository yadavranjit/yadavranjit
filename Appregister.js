import React from 'react'

function Appregister() {
    return (
        <div className="container">
            <div className="row">
                <div className="card m-auto p-5 text-center">
                    <h2>Register Page</h2>
                    <lable for="name">First Name</lable>
                    <input type="text" placeholder="Enter First Name"></input>
                    <lable for="name">Last Name</lable>
                    <input type="text" placeholder="Enter Last Name"></input> 
                    <lable for="name">Email id</lable>
                    <input type="email" placeholder="Enter Email Address"></input> 
                    <lable for="name">Phone Number</lable>
                    <input type="text" placeholder="Enter Phone Number"></input> 
                    <lable for="name">Password</lable>
                    <input type="password" placeholder="Enter Password"></input> 
                    <br></br>

                    <input className="bg-primary col-8 m-auto" type="button" value="Register"></input>

                </div>
            </div>
            
        </div>
    )
}

export default Appregister
