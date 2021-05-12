import './products.css'
import { ReactComponent as PencilIcon } from '../../img/pencil.svg'
import { ReactComponent as PencilIcon2 } from '../../img/pencil2.svg'
import { ReactComponent as UpIcon } from '../../img/up.svg'
import { ReactComponent as DownIcon } from '../../img/down.svg'
import { ReactComponent as TrashIcon } from '../../img/trash.svg'
import React, { useState } from 'react';

export default function ProductChange(props: { name: string, amount: string}) {
    enum ProductStatus{
        static = 1,
        edit 
      }

    const [componentMode, setComponentMode] = useState (ProductStatus.static);

    if(componentMode === ProductStatus.edit) {
        return <div className="Product">
        <div className="text">   
            <PencilIcon2 onClick = {() => (setComponentMode(ProductStatus.static))} className={"pencil--" + String(componentMode)} />
            <TrashIcon className = "trash" />
            <input className="product--count" type="number" pattern="[0-9]*" placeholder={props.amount}></input>
            <input className="product--label" placeholder={props.name}></input>
        </div> 
        </div>
    }

    return <div className="Product">
        <div className="text">
            <PencilIcon onClick = {() => setComponentMode(ProductStatus.edit)} className="pencil" />
            <p className="AmountPlace">{props.amount}x</p> <p>{props.name}</p>
        </div>
        <div className="Up_Down">
            <button className="UpButton"><UpIcon /></button>
            <button className="UpButton"><DownIcon /></button>
        </div>
    </div>
}