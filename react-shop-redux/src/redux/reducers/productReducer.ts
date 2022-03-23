import {IProductActions} from "../actions/productActions";
import {ActionTypes} from "../constants/actionTypes";

interface State {
    products: IProduct[],
    selectedProduct: IProduct | undefined
}

export interface IProduct {
    id: number,
    title: string,
    category: string,
    description: string,
    image: string,
    price: number,
    rating: { count: number, rate: number }
}

const initialState: State = {
    products: [],
    selectedProduct: undefined
}
export const productReducer = (state = initialState, {type, payload}: IProductActions) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return {...state, products: payload};
        default:
            return state
    }
}
export const selectedProductReducer = (state = initialState, {type, payload}: IProductActions) => {
    switch (type) {
        case ActionTypes.SELECTED_PRODUCTS:
            return {...state, selectedProduct:payload};
        default:
            return state
    }
}