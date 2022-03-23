import {createStore} from "redux";
import {reducers} from "./reducers";
import {IProduct} from "./reducers/productReducer";

export interface IProductStore {
    allProducts: {
        products:IProduct[]
    },
    selectedProduct:IProduct
}

export const store = createStore(reducers,
    {},
    // @ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

