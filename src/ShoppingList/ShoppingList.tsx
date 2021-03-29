import React from 'react';
import {
    Switch,
    Route,
    Link
} from 'react-router-dom';
import '../List/List.css';
import Header from '../Header/Header'
import ProductChange from '../Components/ProductChange'
import ProductBuy from '../Components/ProductBuy'



export default function ShoppingList() {
    return <div>
        <Header />
        <h1>29.03.2021</h1>
        <div className="tab">
            <Link to="/list/shoppinglist/bearbeiten"><button className="tabLinks" >Bearbeiten</button></Link>
            <Link to="/list/shoppinglist/kaufen"><button className="tabLinks" >Kaufen</button></Link>
        </div>
        <Switch>
            <Route path="/list/shoppinglist/bearbeiten">
                <div className="Add">
                    <input className="ListInput"></input>
                    <button className="ListButton">+</button>
                </div>
                <ProductChange />
                <ProductChange />
                <ProductChange />
            </Route>
            <Route path="/list/shoppinglist/kaufen">
                <ProductBuy />
                <ProductBuy/>
                <ProductBuy/>
            </Route>
        </Switch>
    </div>;
}