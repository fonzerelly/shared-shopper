import React, { useState } from 'react';
import {
    Switch,
    Route,
    Link
} from 'react-router-dom';
import '../List/List.css';
import {ProductChange, ProductInit } from '../Components/Products/ProductChange'
import { ProductBuy} from '../Components/Products/ProductBuy'
import { Header } from '../Header/header'


export default function ShoppingList() {

    enum TabState {
        editSL = 1,
        buy
    }

    const [toggleState, setToggleState] = useState(TabState.editSL);

    return <div>
        <Header titleName="Einkaufszettel" path="/list"></Header>
        <div className="tab">
            <Link to="/list/shoppinglist/bearbeiten"><button className={ toggleState === 1 ? "tabs active-tabs" : "tabs" } onClick={() => setToggleState(TabState.editSL)}>Bearbeiten</button></Link>
            <Link to="/list/shoppinglist/kaufen"><button className={ toggleState === 2 ? "tabs active-tabs" : "tabs" } onClick={() => setToggleState(TabState.buy)}>Kaufen</button></Link>
        </div>
        <Switch>
            <Route path="/list/shoppinglist/bearbeiten">
                <div className="content-tabs2">
                <div className="content-tabs">
        
                    <ProductInit name="" amount ="" />
                
                <ProductChange name="Butter" amount="1"/>
                <ProductChange name="Kekse" amount="3"/>
                <ProductChange name="Kuchen" amount="5"/>
                <ProductChange name="Eier" amount="10"/>
                </div>
                </div>
            </Route>
            <Route path="/list/shoppinglist/kaufen">
                <h1>Kaufen</h1>
                <ProductBuy name="Kuchen" amount="5" state="unchecked"/>
                <ProductBuy name="Eier" amount="10" state="unchecked"/>
                <h1>Im Einkaufswagen</h1>
                <ProductBuy name="Butter" amount="1" state="checked"/>
                <ProductBuy name="Kekse" amount="3" state="checked"/>
            </Route>
            
        </Switch>
    </div>;
}