import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import {fetchOneProduct} from "../service/ProductService";
import {useDispatch, useSelector} from "react-redux";
import {selectProduct} from "../redux/actions/productActions";
import {IProductStore} from "../redux/store";

export const ProductDetails = () => {
    const {productId} = useParams();
    const state: IProductStore = useSelector((state: IProductStore) => state)
    const dispatch = useDispatch();
    useEffect(() => {
        async function getProduct() {
            const response = await fetchOneProduct(productId);
            dispatch(selectProduct(response.data))
        }

        getProduct()
    }, [])
    //if (selectedProduct) {
    return <div>is ready</div>
    //}
    return <div>loading</div>
}