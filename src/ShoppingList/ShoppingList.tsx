import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import App from "../App"
import '../List/List.css';
import Header from '../Header/Header'
import Product from '../Product/Product'



export default function ShoppingList() {
    return <div>
        <Header />
        <h1>29.03.2021</h1>
        <div className="tab">
            <Link to="/list/shoppinglist/bearbeiten"><button className="tablinks" >Bearbeiten</button></Link>
            <Link to="/list/shoppinglist/kaufen"><button className="tablinks" >Kaufen</button></Link>
        </div>
        <Switch>
            <Route path = "/list/shoppinglist/bearbeiten">
                <div className="Add">
                    <input className="ListInput"></input>
                    <button className="ListButton">+</button>
                </div>
                <Product />
            </Route>
            <Route path = "/list/shoppinglist/kaufen">
                <div className="Add">
                    <input className="ListInput"></input>
                    <button className="ListButton">+</button>
                </div>
                <Product />
            </Route>
        </Switch>
    </div>;
}