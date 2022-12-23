import axios from "axios";

const api_url = "https://fakestoreapi.com/products"

axios.defaults.headers.common["content-type"] = "application/json"
axios.defaults.headers.common["Accept"] = "application/json"


export const AxiosInstance = axios.create({
    baseURL : api_url,
    timeout : 5000
})