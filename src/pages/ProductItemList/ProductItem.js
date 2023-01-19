import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { getCart } from "../../Api/Auth/Cart/cartIndex"
import { ProductItemCall } from "../../Api/Auth/Products/productsDetail"
import Navbar from "../../component/Navbar/Navbar"
import './Productitem.css'
function ProductItem() {

    const [selectproduct, setselectproduct] = useState('')
    const [productDetail, setproductDetail] = useState([])
    const [islogin, setislogin] = useState(false)

    const { id } = useParams() // using this hook im getting particular id of productitem

    // api call for products

    const productCall = async () => {
        let user = localStorage.getItem("name")
        user && setislogin(true)
        setselectproduct(id)
        console.log(id)
        try {
            let { data } = await ProductItemCall(id)
            console.log(data)
            setproductDetail(data)
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        productCall()
    }, [])

    // for adding a product to cart but api is not working

    const addToCart = async() =>{
       let cart = await getCart()
       console.log("getcartfired")
       console.log(cart)
    }

    // diffrent cart rendering

    const renderToCart = () => {
        if (islogin) {
            return (
                <Link to='/Carts' className="product-details-btn btn btn-primary text-decoration-none" onClick={addToCart}>
                    Add To Cart
                </Link>
            )
        }
        else{
               return( <Link to="/login"className="product-details-btn btn btn-danger text-decoration-none">
                    Log In First For to Add To Cart
                </Link>)
            
        }
    }


    const renderComponent = () => {

        return (
            <div>
                <Navbar />
                <div className="product-details">
                    <div className="container">
                        <div className="row">
                            <div className="product-details-wrapper">
                                <div className="product-img">
                                    <div>

                                        <img src={productDetail.image} alt="Product" />
                                    </div>

                                </div>
                                <div className="product-details-box">
                                    <div className="product-name">{productDetail.title}</div>

                                    <div className="product-price fw-bold"><i className="fal fa-dollar-sign"></i>{productDetail.price}</div>
                                    <div className="product-discription">

                                        <div className="product-discription-title">Discription</div>

                                        <div className="product-Desc fw-bold">{productDetail.description}</div>


                                    </div>
                                    <div>

                                    {renderToCart()}
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        renderComponent()
    )
}

export default ProductItem
