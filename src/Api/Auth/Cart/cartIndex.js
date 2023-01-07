import { AxiosInstance } from "../../../Util/AxiosInstace";

export const createCart = async()=>{

    let url = '/carts'
    let token = localStorage.getItem('token')
    let userid = localStorage.getItem("userId")
    let header = {'Authorization' : `Bearer ${token}`}
    let cartid = localStorage.getItem('cartId')
    if (cartid) return;


    try {
        let res = await AxiosInstance.post(url,{userid},{header})
        console.log(res)
        const {id} = res.data;
        localStorage.setItem("cartId", id)
        console.log("cartid ", id)
        return res;
    } catch (error) {
        console.log(error)
    }

}

export const getCart = async()=>{
    let id = localStorage.getItem('cartId')

    // let token = localStorage.getItem('token')

    // let headers = {'Authorization' : `Bearer ${token}`}


    let url = `carts/${id}`

    let cart =  await AxiosInstance.get(url)
    console.log(cart)
    return cart;
}