import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Product} from "./Product";
import {IProductStore} from "../redux/store";
import {IProduct} from "../redux/reducers/productReducer";
import {fetchProducts} from "../service/ProductService";
import {setProducts} from "../redux/actions/productActions";

export const ProductList = () => {
    const status:IProductStore = useSelector((state: IProductStore) => state)
    const dispatch = useDispatch();
    useEffect(() => {
        async function getProducts() {
            const response = await fetchProducts();
            const fetchedProducts: IProduct[] = response.data;
            dispatch(setProducts(fetchedProducts))
        }

        getProducts()
    }, [])
    return (
        <div className="ui grid container">
            {status.selectedProduct && status.allProducts.products?.map((product: IProduct) =>
                <Product key={product.id} id={product.id} product={product}/>
            )}

        </div>
    )
}