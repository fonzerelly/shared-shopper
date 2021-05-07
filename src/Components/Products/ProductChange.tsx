import './products.css'
import { ReactComponent as PencilIcon } from '../../img/pencil.svg'
import { ReactComponent as PencilIcon2 } from '../../img/pencil2.svg'
import { ReactComponent as UpIcon } from '../../img/up.svg'
import { ReactComponent as DownIcon } from '../../img/down.svg'
import { ReactComponent as TrashIcon } from '../../img/trash.svg'
import React, { useState } from 'react';

export default function ProductChange(props: { name: string, amount: string}) {

    const [edit, setEdit] = useState (1);
    const editProduct = (index: number) => {
        setEdit(index)
    }

    if(edit == 2) {
        return <div className="Product">
        <div className="text">   
            <PencilIcon2 onClick = {() => editProduct(1)} className={"pencil" + String(edit)} />
            <TrashIcon className = "trash" />
            <input className="ListInput2" type="number" pattern="[0-9]*" placeholder={props.amount}></input>
            <input className="ListInput3" placeholder={props.name}></input>
        </div> 
        </div>
    }

    return <div className="Product">
        <div className="text">
            <PencilIcon onClick = {() => editProduct(2)} className="pencil" />
            <p className="AmountPlace">{props.amount}x</p> <p>{props.name}</p>
        </div>
        <div className="Up_Down">
            <button className="UpButton"><UpIcon /></button>
            <button className="UpButton"><DownIcon /></button>
        </div>
    </div>
}