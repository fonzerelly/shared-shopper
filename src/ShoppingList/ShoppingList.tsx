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
import { getContent } from '../Login/backend'
import { initialList, initialContent, fetchedList, checkListId } from '../Login/session';


export default function ShoppingList() {
    enum ShoppingListMode {
        EDIT_MODE = 1,
        BUY_MODE
    }

    const [toggleState, setToggleState] = useState(ShoppingListMode.EDIT_MODE);
    const [listFetch, setListFetch] = useState(initialContent());

    useEffect(() => {
        const currentListId = checkListId()
        console.log(JSON.stringify(currentListId))
        getContent("0")
            .then((data) => setListFetch(data))
    }, [])

    return <div>
        <Header titleName="Einkaufszettel" path="/list"></Header>
        <div className="tab">
            <Link to="/list/shoppinglist/bearbeiten/0"><button className={toggleState === 1 ? "tabs active-tabs" : "tabs"} onClick={() => setToggleState(ShoppingListMode.EDIT_MODE)}>Bearbeiten</button></Link>
            <Link to="/list/shoppinglist/kaufen/0"><button className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={() => setToggleState(ShoppingListMode.BUY_MODE)}>Kaufen</button></Link>
        </div>
        <Switch>
            <Route path="/list/shoppinglist/bearbeiten/0">
                <div className="content-tabs2">
                    <div className="content-tabs">

                        <ProductInit name="" amount="" />

                        {listFetch.map((list, id) => {
                            return (<ProductChange key={id} name={list.label} amount={JSON.stringify(list.count)}></ProductChange>)

                        })}
                    </div>
                </div>
            </Route>
            <Route path="/list/shoppinglist/kaufen/0">
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