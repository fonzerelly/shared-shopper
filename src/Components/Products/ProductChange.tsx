import './products.css'
import { ReactComponent as PencilIcon } from '../../img/pencil.svg'
import { ReactComponent as PencilIcon2 } from '../../img/pencil2.svg'
import { ReactComponent as TrashIcon } from '../../img/trash.svg'
import React, { useState } from 'react';
import { editCount, getContent } from '../../Login/backend'
import { UpDownButtons } from '../UpDownButton/UpDownButton'
import {useToken} from '../../useToken/useToken'
import { useSecret} from '../../secret/secret';

export function ProductChange(props: { name: string, amount: number, delete: Function, productId: number, position: number, listId: string | null, setter: Function, onMove: Function, listContent: any }) {
    enum ProductStatus {
        STATIC = 1,
        EDITABLE
    }

    const [componentMode, setComponentMode] = useState(ProductStatus.STATIC);
    const [currentAmount, setCurrentAmount] = useState(String(props.amount))
    const { token } = useToken();
    const {secret} = useSecret()

    async function onClickEdit() {
        setComponentMode(ProductStatus.STATIC)
    }

    async function onChangeEdit(txt: string) {
        if (txt !== currentAmount) {
            await editCount(txt, props.listId, props.productId, token, secret)
        }
        setCurrentAmount(txt)
        const data = await getContent(props.listId, token, secret)
            props.setter(data)
    }

    function onClickDelete() {
        props.delete()
    }

    if (componentMode === ProductStatus.EDITABLE) {
        return <div className="Product" data-testid="product--editable">
            <div className="text" data-testid="text-container2">
                <PencilIcon2 onClick={() => onClickEdit()} className={"pencil--" + String(componentMode)} data-testid="Pencil2" />
                <TrashIcon className="trash" onClick={() => onClickDelete()} data-testid="trash" />
                <input className="product--count" type="number" pattern="[0-9]*" placeholder={String(props.amount)} onChange={(e) => { onChangeEdit(e.target.value) }}></input>
                <input className="product--label" placeholder={props.name}></input>
            </div>
        </div>
    }

    return <div className="Product" data-testid="product--static">
        <div className="text" data-testid="text-container">
            <PencilIcon onClick={() => setComponentMode(ProductStatus.EDITABLE)} className="pencil" data-testid="Pencil1" />
            <p className="AmountPlace">{props.amount}x</p> <p>{props.name}</p>
        </div>
        <UpDownButtons listId={props.listId} productId={props.productId} position={props.position} onMove={() => { props.onMove() }} list={props.listContent} data-testid="UpDownButtons" />
    </div>
}

export function ProductInit(props: { name: string, amount: string, setter: Function, setterCount: Function, fetch: Function }) {
    const [inputCount, setInputCount] = useState("");
    const [inputLabel, setInputLabel] = useState("");

    function onChangeCount(e: string) {
        props.setterCount(e)
        setInputCount(e)
    }

    function onChangeLabel(e: string) {
        props.setter(e)
        setInputLabel(e)
    }

    function onClickButton(){
        props.fetch()
        setInputCount("")
        setInputLabel("")
        props.setterCount("")
        props.setter("")
    }
    return <div className="Product" data-testid="Initial">
        <div className="text">
            <input className="productInit--count" type="number" pattern="[0-9]*" placeholder="0" value={inputCount} onChange={(e) => { onChangeCount(e.target.value)}}></input>
            <input className="productInit--label" placeholder="Produkt" value = {inputLabel} onChange={(e) => { onChangeLabel(e.target.value) }}></input>
        </div>
        <div className="Up_Down">
            <button className="productInit--button" onClick={() => onClickButton()}>+</button>
        </div>
    </div>
}