import React, { useEffect, useState } from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom'
import { forsignout } from '../../Api/Auth/idx'
function Navbar() {

    let [user, setuser] = useState("Guest")


    useEffect(()=>{
        let localname = localStorage.getItem("name") 
        localname && setuser(localname)    // for guest user functionality
    },[user])

    // for logout button providing a handler function
    
    let logoutHandler = ()=>{
        forsignout()
        setuser("Guest")
    }

    // navbar rendering
    
        const renderComponent = () =>{
        return (
        <div className="header fixed-top">
            <div className="container">
                <div className="row">
                    <div className="header-wrapper">
                        <div className="logo">
                            <Link to="/">Ecommerce</Link>
                        </div>
                        <div className="user">
                            <Link to="/Carts">Cart</Link>
                        </div>
                        <div className="userInfo">

                            <Link to="/Guest">{user}</Link> 
                        
                        </div>
                       
                       {user !== "Guest" ? <Link to="/login" className="logout-btn" onClick={logoutHandler}>LogOut</Link>:
                       <div className="login_btn">
                            <Link to="/login">login</Link>
                        </div>
                       }
                    
                    </div>
                </div>
            </div>
        </div>)
    }
    return (
        renderComponent()
  )
}

export default Navbar
