import React from 'react'
import {  Routes,Route } from 'react-router-dom'
import LandingPage from "../../pages/LandingPage/LandingPage"
import Auth from '../../pages/Auth/Auth'
import ProductList from '../Product/ProductList'
import ProductItem from '../../pages/ProductItemList/ProductItem'
import Carts from '../CartsItem/Carts'

function AppRouter() {
  return (
    <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/login' element={<Auth/>}/>
        <Route path='/products' element={<ProductList/>}/>
        <Route path='/products/:id' element={<ProductItem/>}/>
        <Route path='/Carts' element = {<Carts/>}></Route>
    </Routes>
  )
}

export default AppRouter
