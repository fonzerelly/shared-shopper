import './products.css'
import { ReactComponent as PencilIcon } from '../../img/pencil.svg'
import { ReactComponent as PencilIcon2 } from '../../img/pencil2.svg'
import { ReactComponent as UpIcon } from '../../img/up.svg'
import { ReactComponent as DownIcon } from '../../img/down.svg'
import { ReactComponent as TrashIcon } from '../../img/trash.svg'
import React, { useState } from 'react';
import { editCount, getContent } from '../../Login/backend'
import { changePositionUp, changePositionDown} from '../../Login/backend'

export function ProductChange(props: { name: string, amount: number, delete: Function, productId: number, listId: string | null, setter: Function, onMoveUp: Function }) {
    enum ProductStatus {
        STATIC = 1,
        EDITABLE
    }

    const [componentMode, setComponentMode] = useState(ProductStatus.STATIC);
    const [currentAmount, setCurrentAmount] = useState("")

    function onClickEdit() {
        setComponentMode(ProductStatus.STATIC)
        editCount(currentAmount, props.listId, props.productId)
        getContent(props.listId)
            .then((data) => props.setter(data))
    }

    function onClickUp() {
        changePositionUp(props.listId, props.productId)
        props.onMoveUp()
        console.log(props.productId)
    }
 
    function onClickDown() {
     changePositionDown(props.listId, props.productId)
     props.onMoveUp()
     console.log(props.productId)
    }

    if (componentMode === ProductStatus.EDITABLE) {
        return <div className="Product">
            <div className="text">
                <PencilIcon2 onClick={()=>onClickEdit()} className={"pencil--" + String(componentMode)} />
                <TrashIcon className="trash" onClick={()=> props.delete()} />
                <input className="product--count" type="number" pattern="[0-9]*" placeholder={JSON.stringify(props.amount)} onChange={(e) => { setCurrentAmount(e.target.value)}}></input>
                <input className="product--label" placeholder={props.name}></input>
            </div>
        </div>
    }
    
  

    return <div className="Product">
        <div className="text">
            <PencilIcon onClick={() => setComponentMode(ProductStatus.EDITABLE)} className="pencil" />
            <p className="AmountPlace">{props.amount}x</p> <p>{props.name}</p>
        </div>
        <div className="Up_Down">
            <button className="UpButton" onClick={()=>{onClickUp()}}><UpIcon /></button>
            <button className="DownButton" onClick={()=>{onClickDown()}}><DownIcon /></button>
        </div>
    </div>
}

export function ProductInit(props: { name: string, amount: string, setter: Function, setterCount: Function, fetch: Function }) {
    return <div className="Product">
        <div className="text">
            <input className="productInit--count" type="number" pattern="[0-9]*" placeholder="Anzahl" onChange={(e) => { props.setterCount(e.target.value)}}></input>
            <input className="productInit--label" placeholder="Produkt" onChange={(e) => { props.setter(e.target.value)}}></input>
        </div>
        <div className="Up_Down">
            <button className="productInit--button" onClick={() => props.fetch()}>+</button>
        </div>
    </div>
}