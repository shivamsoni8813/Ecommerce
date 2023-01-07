import React, { useEffect, useState } from 'react'
import { getAllproduct, productForCategory, searchProducts } from '../../Api/Auth/Products/productsDetail'
import Navbar from '../Navbar/Navbar'
import { Link } from 'react-router-dom'
import "./ProductList.css"





function ProductList() {


  const [product, setproduct] = useState([])
  const [currCategory, setCurrCategory] = useState("")
  const [currCategoryName, setCurrCategoryName] = useState("")
  const [minprice, setminprice] = useState(0)
  const [maxprice, setmaxprice] = useState(-1)

  const init = async () => {

    const query = new URLSearchParams(window.location.search)
    let id = query.get('categoryId')
    let cateName = query.get('name')
    setCurrCategory(id)
    setCurrCategoryName(cateName)
    try {
      // let { data } = 

      let { data } = cateName ? await productForCategory(cateName) : await getAllproduct()
      console.log(data)
      setproduct(data)
    } catch (error) {
      console.log(error);
    }
  }


  useEffect(() => {
    init()
  }, [])


  const searchChangeHandler = async (e) => {

    let input ={name : e.target.value};

    try {
      let res = await searchProducts(input)
      console.log(input)
      console.log(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  const updateMinPrice = (e)=>{
    console.log(e.target.value);
    setminprice(e.target.value)
    filterFun(e.target.value, maxprice)
  }
  
  const updateMaxPrice = (e)=>{
    console.log(e.target.value);
    setmaxprice(e.target.value)
    filterFun(minprice, e.target.value)

  }


  const filterFun = async(minprice, maxprice) =>{

    const input = {
      minCost : minprice,
      maxCost : maxprice
    }
    // My Name Is Dhanush Joker

    try {
      let result = await searchProducts(input)
      setproduct(result.data)
      console.log(result.data)
    } catch (error) {
      console.log(error)
    }

  }




  const renderSearch = () => {
    return (
      <div style={{position :"sticky", top : 200}}>
        <div className="sidebar-search">
          <input type="text" className='form-control'  onChange={searchChangeHandler} placeholder='type for search...' />
         
         { !currCategory && (
         <>
         <div className="sidebar-title">
              Filter Price
          </div>
          <div className="price-filter">
            <div className="price-filter-select">
              <div className="form-group">
                <select className='form-select' onChange={updateMinPrice}>
                  <option value="0">0</option>
                  <option value="1000">1000</option>
                  <option value="2000">2000</option>
                  <option value="3000">30000</option>
                </select>
              </div>
              <div className="form-group">
                <select className='form-select' onChange={updateMaxPrice}>
                  <option value="0">0</option>
                  <option value="3000">30000</option>
                </select>
              </div>
            </div>

              <div className="price-filter-title d-flex justify-content-between">
                <div>Min Price</div>
                <div>Max Price</div>
              </div>
              
              <div className="btn btn-primary clear-filter">
                Clear All Filter
              </div>
          </div>
          </>
          )}
        </div>
      </div>
    )
  }



  const renderComponent = () => {
    return (
      <>
        <Navbar />
        <div className="product-list">
          <div className="container">
            <div className="row d-flex justify-content-between">
              <div className="col-3">

                {renderSearch()}

              </div>
              <div className="col-8">
                <h2 className="product-list-title">
                  {currCategory ? `Products in '${currCategoryName}' category` : "AllProDucts"}
                </h2>

                <div className="product-list-wrapper">

                  <div className="product-list-box">

                    {product.map((product) => {
                      return (
                        <Link to={`/products/${product.id}`} key={product.id} className='product-item'>

                          <div className="product-img">

                            <img src={product.image} alt="item pic" />

                          </div>
                          <div className="product-name text-center"> {product.title}</div>
                          <div className="product-price"> <i className="fal fa-dollar-sign"></i>{product.price}</div>
                          <div className="product-discription">{product.description.slice(0, 40)}</div>

                        </Link>
                        )
                    })}

                  </div>

                </div>

              </div>

            </div>
          </div>
        </div>
      </>
    )
  }
  return (
    renderComponent()
  )
}

export default ProductList
