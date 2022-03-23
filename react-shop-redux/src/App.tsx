import React from "react";
import {Header} from "./containers/Header";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import {ProductList} from "./containers/ProductList";
import "./App.css";
import {Product} from "./containers/Product";
import {ProductDetails} from "./containers/ProductDetails";

function App() {

    return (<div className="App">
        <Header/>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<ProductList/>}/>
                <Route path='/product/:productId' element={<ProductDetails/>}/>

            </Routes>
        </BrowserRouter>
    </div>)
}

export default App;