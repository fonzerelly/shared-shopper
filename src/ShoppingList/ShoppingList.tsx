import React, { useState } from 'react';
import {
    Switch,
    Route,
    Link
} from 'react-router-dom';
import '../List/List.css';
import ProductChange from '../Components/Products/ProductChange'
import {ProductBuy, ProductBuyChecked} from '../Components/Products/ProductBuy'
import {Header} from '../Header/header'





export default function ShoppingList() {
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index: number) => {
        setToggleState(index)
    }
    const [edit, setEdit] = useState(1);

    return <div>
        <Header titleName="Einkaufszettel" path="/list"></Header>
        
        <div className="tab">
            <Link to="/list/shoppinglist/bearbeiten"><button className={ toggleState === 1 ? "tabs active-tabs" : "tabs" } onClick={() => toggleTab(1)}>Bearbeiten</button></Link>
            <Link to="/list/shoppinglist/kaufen"><button className={ toggleState === 2 ? "tabs active-tabs" : "tabs" } onClick={() => toggleTab(2)}>Kaufen</button></Link>
        </div>
        <Switch>
            <Route path="/list/shoppinglist/bearbeiten">
                <div className="content-tabs2">
                <div className="content-tabs">
                <div className="Add">
                    <input className="ListInput" type="number" pattern="[0-9]*" placeholder="Anzahl"></input>
                    <input className="ListInput" placeholder="Produkt"></input>
                    <button className="ListButton">+</button>
                </div>
                <ProductChange name="Butter" amount="1"/>
                <ProductChange name="Kekse" amount="3"/>
                <ProductChange name="Kuchen" amount="5"/>
                <ProductChange name="Eier" amount="10"/>
                </div>
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


