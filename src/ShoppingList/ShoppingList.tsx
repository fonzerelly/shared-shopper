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
import ProductChange from '../Components/ProductChange'



export default function ShoppingList() {
    return <div>
        <Header />
        <h1>29.03.2021</h1>
        <div className="tab">
            <Link to="/list/shoppinglist/bearbeiten"><button className="tabLinks tabLinksActive" >Bearbeiten</button></Link>
            <Link to="/list/shoppinglist/kaufen"><button className="tabLinks" >Kaufen</button></Link>
        </div>
        <Switch>
            <Route path = "/list/shoppinglist/bearbeiten">
                <div className="Add">
                    <input className="ListInput"></input>
                    <button className="ListButton">+</button>
                </div>
                <ProductChange />
            </Route>
            <Route path = "/list/shoppinglist/kaufen">
                <div className="Add">
                    <input className="ListInput"></input>
                    <button className="ListButton">+</button>
                </div>
                <ProductChange />
            </Route>
        </Switch>
    </div>;
}