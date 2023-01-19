import { useEffect, useState } from "react"
import Navbar from "../../component/Navbar/Navbar"
import { allcatagory } from "../../Api/Auth/idx"
import "./lp.css"
import { Link } from "react-router-dom"

function LandingPage() {

    const [catagories, setcatagory] = useState([])
    const [single, setsingle] = useState("")
    const [singlecate, setsinglecate] = useState([])
    
// fatching all  categories

    const fetchcatagory = async () => {
        try {
            const res = await allcatagory()
            setcatagory(res.data)
            console.log(res.data)
        } catch (error) {
            throw new error("Page Not Found")
        }
    }
    useEffect(() => {
        fetchcatagory()
    }, [])


    const renderComponent = () => {
        return (
            <>
                <Navbar/>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="homeTitle">Welcome To Online Shopping...</h2>
                        </div>

                        <div className="col-12">
                            <div className="catagory-List">
                                <div className="catagory-item">
                                   <Link to="/products">All Products</Link>
                                </div>

                                {catagories.map((catagory,i) => {
                                    return (
                                        <div className="catagory-item" key={i}> 
                                            <Link to={`/products?categoryId=${i}&name=${catagory}`}  className="text-white" >{catagory}</Link>                                            
                                        </div>
                                    )
                                })}
                                
                            </div>
                        </div>
                        
                        <div className="col-12">
                            <div className="catagory-title">
                                Select A Catagory To Start Shopping
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

export default LandingPage
