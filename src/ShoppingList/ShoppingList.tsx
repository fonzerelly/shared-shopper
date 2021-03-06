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
import { initialContent, findListId } from '../Login/session';
import { useToken } from '../useToken/useToken'
import { useSecret } from '../secret/secret';

export function ShoppingList() {
    enum ShoppingListMode {
        EDIT_MODE = 1,
        BUY_MODE
    }

    const [toggleState, setToggleState] = useState(ShoppingListMode.EDIT_MODE);
    const [listContent, setListContent] = useState(initialContent());
    const [productName, setProductName] = useState("")
    const [productCount, setProductCount] = useState(0)
    const currentListId = findListId()
    const { token } = useToken();
    const { secret } = useSecret();

    useEffect(() => {
        getContent(currentListId, token, secret)
            .then((data) => setListContent(data))
    }, [currentListId, token, secret])

    async function onClickFetch() {
        await addContent(productName, productCount, currentListId, token, secret)
        const data = await getContent(currentListId, token, secret)
        setListContent(data)
    }

    async function onClickDelete(id: number, position: number) {
        await deleteContent(currentListId, id, token, secret)
        const data = await getContent(currentListId, token, secret)
        setListContent(data)
        console.log(listContent)
    }

    async function updateList() {
        const data = await getContent(currentListId, token, secret)
        setListContent(data)
    }

    function refreshProductInput() {
        setToggleState(ShoppingListMode.EDIT_MODE)
        setProductName("")
        setProductCount(0)
    }

    return <div>
        <Header titleName="Einkaufszettel" path="/list" list={false}></Header>
        <div className="tab" data-testid="tab">
            <Link to={`/list/shoppinglist/bearbeiten/?id=${currentListId}`} data-testid="bearbeiten">
                <button className={toggleState === 1 ? "tabs active-tabs" : "tabs"} onClick={() => refreshProductInput()}>Bearbeiten</button>
            </Link>
            <Link to={`/list/shoppinglist/kaufen/?id=${currentListId}`} data-testid="kaufen">
                <button className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={() => setToggleState(ShoppingListMode.BUY_MODE)}>Kaufen</button>
            </Link>
        </div>
        <Switch>
            <Route path={`/list/shoppinglist/bearbeiten`}>
                <div className="content-tabs2" data-testid="content-tabs2">
                    <div className="content-tabs" data-testid="content-tabs">
                        <ProductInit name="" amount="" setter={(txt: string) => { setProductName(txt) }} setterCount={(num: number) => { setProductCount(num) }} fetch={() => onClickFetch()} />
                        {listContent
                            .sort((a, b) => a.position - b.position)
                            .map((list) => {
                                return (<ProductChange key={list.position} name={list.label} amount={list.count} productId={list.id} position={list.position} listId={currentListId} delete={() => onClickDelete(list.id, list.position)} setter={setListContent} onMove={() => updateList()} listContent={listContent}></ProductChange>)
                            })}
                    </div>
                </div>
            </Route>
            <Route path={`/list/shoppinglist/kaufen`}>
                <div className="content-tabs2">
                    <h1>Kaufen</h1>
                    {listContent.map((list, id) => {
                        let content;
                        if (list.marked === false) {
                            return content = (<ProductBuy key={id} name={list.label} amount={list.count} state={false} productId={list.id} listId={currentListId} markFn={() => { updateList() }}></ProductBuy>)
                        }
                        return content;
                    })}
                    <h1>Im Einkaufswagen</h1>
                    {listContent.map((list, id) => {
                        let content
                        if (list.marked === true) {
                            return content = (<ProductBuy key={id} name={list.label} amount={list.count} state={true} productId={list.id} listId={currentListId} markFn={() => { updateList() }}></ProductBuy>)
                        }
                        return content
                    })}
                </div>
            </Route>
        </Switch>
    </div>;
}