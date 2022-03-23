import React from "react";
import {IProduct} from "../redux/reducers/productReducer";
import { useNavigate} from "react-router-dom";

type ProductProps = {
    product: IProduct,
    id: number
}
export const Product = (props: ProductProps) => {
    const navigate = useNavigate();
    return (
        <div className="four wide column" onClick={()=>navigate(`product/${props.id}`)}>
            <div className="ui link cards">
                <div className="card">
                    <div className="image">
                        <img src={props.product.image} alt="image"/>
                    </div>
                    <div className="content">
                        <div className="header"> {props.product.title}</div>
                        <div className="meta price"> ${props.product.price}</div>
                        <div className="meta"> {props.product.category}</div>
                    </div>

                </div>
            </div>
        </div>
    )
}