import './products.css'
import { ReactComponent as PencilIcon } from '../../img/pencil.svg'
import { ReactComponent as UpIcon } from '../../img/up.svg'
import { ReactComponent as DownIcon } from '../../img/down.svg'
import { ReactComponent as TrashIcon } from '../../img/trash.svg'
import React, { useState } from 'react';

export default function ProductChange(props: { name: string, amount: string }) {
    return <div className="Product">
        <div className="text">
            <PencilIcon className="pencil" />
            <p className="AmountPlace">{props.amount}x</p> <p>{props.name}</p>
        </div>
        <div className="Up_Down">
            <button className="UpButton"><UpIcon /></button>
            <button className="UpButton"><DownIcon /></button>
        </div>
    </div>
}
export function ProductChangeEdit(props: { name: string, amount: string }) {
    return <div>
        <TrashIcon />
        <input className="ListInput2" type="number" pattern="[0-9]*" placeholder="1x"></input>
        <input className="ListInput3" placeholder="Butter"></input>
        <button className="UpButton"><UpIcon /></button>
        <button className="UpButton"><DownIcon /></button></div>
}