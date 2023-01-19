import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Cart.css'
function Carts() {


    const renderComponent = () =>{
        return(
            <>
            <Navbar/>
                <div className="carts">
                    
                </div>
            </>
        )
    }
  return (
    renderComponent()
  )
}

export default Carts
