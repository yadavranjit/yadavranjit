import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

import { Link, Router } from "react-router-dom";

function AppHeader() {
    return (
       
         <>
         <Navbar bg="dark" varient="dark">
             <Navbar.Brand href="#home">Navbar</Navbar.Brand>
             <Nav className="mr-auto nav_bar_wrapper">
                 {
                     localStorage.getItem('user-info') ?
                     <>
                     <Router>
                        <Link to="/dashboard" >Dashboard</Link>
                        <Link to="/logOut" >Log-Out</Link>
                        </Router>
                     </>
                     :
                     <>
                     <Router>
                           <Link to="/login" >Login</Link>
                        <Link to="/register" >Update Product</Link>
                    </Router> 
                     </>
                 }
             </Nav>
         </Navbar>
        
         </>
          
    )
}

export default AppHeader;
