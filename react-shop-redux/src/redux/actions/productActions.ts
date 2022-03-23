import {ActionTypes} from "../constants/actionTypes";
import {IProduct} from "../reducers/productReducer";

export type IProductActions = {
    type: string,
    payload: IProduct | IProduct[]
}

export const setProducts = (products: IProduct[]): IProductActions => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products
    }
}

export const selectProduct = (product: IProduct): IProductActions => {
    return {
        type: ActionTypes.SELECTED_PRODUCTS,
        payload: product
    }
}