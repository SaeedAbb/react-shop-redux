import axios from "axios";

export async function fetchProducts() {
    return axios.get('https://fakestoreapi.com/products');
}

export async function fetchOneProduct(id: string | undefined) {
    return axios.get(`https://fakestoreapi.com/products/${id}`)
}