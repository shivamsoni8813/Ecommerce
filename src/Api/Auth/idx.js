import axios, { Axios } from "axios";
import { AxiosInstance } from "../../Util/AxiosInstace";

export const forsignin = async(user)=>{
    const url = "https://fakestoreapi.com/auth/login"
    try {
        let res = await axios.post(url,user)
        console.log(res);
        return res;
    } catch (error) {
        console.log(error)
    }
}

export const forsignup = async(user)=>{
    const url = "/users"
    try {
        let res = await AxiosInstance.post(url, user)
        console.log(res);
        return res
    } catch (error) {
        console.log(error)
        
    }
}

export const forsignout = ()=>{
    localStorage.removeItem("name")
}

export const allcatagory = async()=>{
    let url = "/products/categories"

    try {
        let res = await AxiosInstance.get(url)
        return res
    } catch (error) {
        throw error
    }
}

export const getsingleCategory = async(para)=>{
    let url = `products/category/${para}`
    try {
        let res = await AxiosInstance.get(url)
        return res;
    } catch (error) {
        throw error
    }
}