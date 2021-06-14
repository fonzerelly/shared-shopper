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
import { addContent, deleteContent, getContent } from '../Login/backend'
import { initialContent, checkListId } from '../Login/session';


export default function ShoppingList() {
    enum ShoppingListMode {
        EDIT_MODE = 1,
        BUY_MODE
    }

    const [toggleState, setToggleState] = useState(ShoppingListMode.EDIT_MODE);
    const [listContent, setListContent] = useState(initialContent());

    const [productName, setProductName] = useState("")
    const [productCount, setProductCount] = useState(0)
    const currentListId = checkListId()

    useEffect(() => {
        getContent(currentListId)
            .then((data) => setListContent(data))

    }, [currentListId])

    function onClickFetch() {
        addContent(productName, productCount, currentListId)
        getContent(currentListId)
            .then((data) => setListContent(data))
    }

    function onClickDelete(id: number) {
        deleteContent(currentListId, id)
        getContent(currentListId)
            .then((data) => setListContent(data))
    }

    return <div>
        <Header titleName="Einkaufszettel" path="/list"></Header>
        <div className="tab">
            <Link to={`/list/shoppinglist/bearbeiten/?id=${currentListId}`}><button className={toggleState === 1 ? "tabs active-tabs" : "tabs"} onClick={() => setToggleState(ShoppingListMode.EDIT_MODE)}>Bearbeiten</button></Link>
            <Link to={`/list/shoppinglist/kaufen/?id=${currentListId}`}><button className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={() => setToggleState(ShoppingListMode.BUY_MODE)}>Kaufen</button></Link>
        </div>
        <Switch>
            <Route path={`/list/shoppinglist/bearbeiten`}>
                <div className="content-tabs2">
                    <div className="content-tabs">

                        <ProductInit name="" amount="" setter={(txt: string) => { setProductName(txt) }} setterCount={(num: number) => { setProductCount(num) }} fetch={() => onClickFetch()} />

                        {listContent.map((list, id) => {
                            return (<ProductChange key={id} name={list.label} amount={list.count} productId={list.id} listId={currentListId} delete={() => onClickDelete(list.id)} setter={setListContent} ></ProductChange>)

                        })}
                    </div>
                </div>
            </Route>
            <Route path={`/list/shoppinglist/kaufen`}>
                <h1>Kaufen</h1>
                {listContent.map((list, id) => {
                    if (list.marked = true) {
                        return (<ProductBuy key={id} name={list.label} amount={list.count} state={false} productId={list.id} listId={currentListId}></ProductBuy>)
                    }
                })}
                {/* <ProductBuy name="Kuchen" amount="5" state="unchecked" />
                <ProductBuy name="Eier" amount="10" state="unchecked" /> */}
                <h1>Im Einkaufswagen</h1>
                {listContent.map((list, id) => {
                    if (list.marked = false) {
                        return (<ProductBuy key={id} name={list.label} amount={list.count} state={true} productId={list.id} listId={currentListId}></ProductBuy>)
                    }
                })}
            </Route>

        </Switch>
    </div>;
}