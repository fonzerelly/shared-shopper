import React, { useState, useEffect } from 'react';
import {
    Switch,
    Route,
    Link
} from 'react-router-dom';
import '../List/List.css';
import { ProductChange, ProductInit } from '../Components/Products/ProductChange'
import { ProductBuy } from '../Components/Products/ProductBuy'
import { Header } from '../Header/header'
import { getList } from '../Login/backend'
import { initialList, fetchedList } from '../Login/session';


export default function ShoppingList() {
    enum ShoppingListMode {
        EDIT_MODE = 1,
        BUY_MODE
    }

    const [toggleState, setToggleState] = useState(ShoppingListMode.EDIT_MODE);

    const [listFetch, setListFetch] = useState(initialList);

    useEffect(() => {
        let content
        getList()
            .then((data) => setListFetch(data))
    }, [])

    console.log(listFetch)

    return <div>
        <Header titleName="Einkaufszettel" path="/list"></Header>
        <div className="tab">
            <Link to="/list/shoppinglist/bearbeiten"><button className={toggleState === 1 ? "tabs active-tabs" : "tabs"} onClick={() => setToggleState(ShoppingListMode.EDIT_MODE)}>Bearbeiten</button></Link>
            <Link to="/list/shoppinglist/kaufen"><button className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={() => setToggleState(ShoppingListMode.BUY_MODE)}>Kaufen</button></Link>
        </div>
        <Switch>
            <Route path="/list/shoppinglist/bearbeiten">
                <div className="content-tabs2">
                    <div className="content-tabs">

                        <ProductInit name="" amount="" />

                        {listFetch.map((list, id) => {
                            return (<ProductChange key={id} name={list.content[id].label} amount="1"></ProductChange>)

                        })}
                    </div>
                </div>
            </Route>
            <Route path="/list/shoppinglist/kaufen">
                <h1>Kaufen</h1>
                <ProductBuy name="Kuchen" amount="5" state="unchecked" />
                <ProductBuy name="Eier" amount="10" state="unchecked" />
                <h1>Im Einkaufswagen</h1>
                <ProductBuy name="Butter" amount="1" state="checked" />
                <ProductBuy name="Kekse" amount="3" state="checked" />
            </Route>

        </Switch>
    </div>;
}