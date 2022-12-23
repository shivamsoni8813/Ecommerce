import { useEffect, useState } from "react"
import Navbar from "../../component/Navbar/Navbar"
import { AxiosInstance } from "../../Util/AxiosInstace"
import "./lp.css"

function LandingPage() {

    const [catagory, setcatagory] = useState([])
    useEffect(() => {
        fetchcatagory()
    }, [])

    const fetchcatagory = async () => {
        try {
            const res = await AxiosInstance.get("/categories")
            setcatagory(res.data)
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }

    const renderComponent = () => {
        return (
            <>
                <Navbar />
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="homeTitle">Welcome To Online Shopping...</h2>
                        </div>

                        <div className="col-12">
                            <div className="catagory-List">
                                <div className="catagory-item">
                                    All Product
                                </div>
                                {catagory.map((catagory,i) => {
                                    return (
                                        <div className="catagory-item" key={i}>
                                            {catagory}
                                        </div>
                                    )
                                })}
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
