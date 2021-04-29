import React, { useState } from 'react';
import {
    Switch,
    Route,
    Link
} from 'react-router-dom';
import '../List/List.css';
import Header from '../Header/Header'
import ProductChange from '../Components/ProductChange'
import {ProductBuy, ProductBuyChecked} from '../Components/ProductBuy'





export default function ShoppingList() {
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index: number) => {
        setToggleState(index)
    }
    return <div>
        <Header />
        <h1>Einkaufsliste</h1>
        <div className="tab">
            <Link to="/list/shoppinglist/bearbeiten"><button className={ toggleState === 1 ? "tabs active-tabs" : "tabs" } onClick={() => toggleTab(1)}>Bearbeiten</button></Link>
            <Link to="/list/shoppinglist/kaufen"><button className={ toggleState === 2 ? "tabs active-tabs" : "tabs" } onClick={() => toggleTab(2)}>Kaufen</button></Link>
        </div>
        <Switch>
            <Route path="/list/shoppinglist/bearbeiten">
                <div className="content-tabs">
                <div className="Add">
                    <input className="ListInput"></input>
                    <button className="ListButton">+</button>
                </div>
                <ProductChange name="Butter" amount="1"/>
                <ProductChange name="Kekse" amount="3"/>
                <ProductChange name="Kuchen" amount="5"/>
                <ProductChange name="Eier" amount="10"/>
                </div>
            </Route>
            <Route path="/list/shoppinglist/kaufen">
                <h1>Kaufen</h1>
                <ProductBuy name="Kuchen" amount="5"/>
                <ProductBuy name="Eier" amount="10"/>
                <h1>Im Einkaufswagen</h1>
                <ProductBuyChecked name="Butter" amount="1"/>
                <ProductBuyChecked name="Kekse" amount="3"/>
            </Route>
            
        </Switch>
    </div>;
}


