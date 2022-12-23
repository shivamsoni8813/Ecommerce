import React from 'react'
import "./navbar.css"
function Navbar() {
    const renderComponent = () =>{
        return (
        <div className="header">
            <div className="container">
                <div className="row">
                    <div className="header-wrapper">
                        <div className="logo">
                            <a href="/">Ecommerce</a>
                        </div>
                        <div className="user">
                            <a href="/cart">Cart</a>
                        </div>
                        <div className="userInfo">
                            <a href="/Guest">Guest</a> 
                        </div>
                        <div className="login_btn">
                            <a href="/login">login</a>
                        </div>
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
