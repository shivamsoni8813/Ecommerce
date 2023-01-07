import React from 'react'
import {  Routes,Route } from 'react-router-dom'
import LandingPage from "../../pages/LandingPage/LandingPage"
import Auth from '../../pages/Auth/Auth'
import ProductList from '../Product/ProductList'
import ProductItem from '../../pages/ProductItemList/ProductItem'

function AppRouter() {
  return (
    <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/login' element={<Auth/>}/>
        <Route path='/products' element={<ProductList/>}/>
        <Route path='/products/:id' element={<ProductItem/>}/>
    </Routes>
  )
}

export default AppRouter
