import { AxiosInstance } from "../../../Util/AxiosInstace";

// These apis are not in working that's why im not getting proper response

export const createCart = async()=>{

    let url = '/carts'
    let token = localStorage.getItem('token')
    let userid = localStorage.getItem("userId")
    let header = {'Authorization' : `Bearer ${token}`}
    let cartid = localStorage.getItem('cartId')
    if (cartid) return;


    try {
        let res = await AxiosInstance.post(url,{userid})
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

    let token = localStorage.getItem('token')

    let headers = {Authorization : `Bearer ${token}`}


    let url = `carts/${id}`

    let cart =  await AxiosInstance.get(url, {headers})
    console.log(cart)
    return cart;
}