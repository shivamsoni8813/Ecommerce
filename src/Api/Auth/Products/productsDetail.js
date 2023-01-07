import { AxiosInstance } from "../../../Util/AxiosInstace";

export const getAllproduct = ()=>{
    let url = "/products"
    return  AxiosInstance.get(url)
}

export const productForCategory = async(cateName)=>{
    let url = `/products/category/${cateName}`
    let res = await AxiosInstance.get(url)
    return res;
}

export const searchProducts = (sdata)=>{
    let url = `/products`
    return AxiosInstance.get(url,{params : sdata})
}

export const ProductItemCall = (id) =>{
    let url = `products/${id}`

    return AxiosInstance.get(url,id)
}