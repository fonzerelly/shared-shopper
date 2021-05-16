import React, { useState } from 'react';
import './products.css'
import { Checkbox, CheckboxChecked } from '../Checkbox/Checkbox'

export function ProductBuy(props: { name: string, amount: string, state: string }) {

    if(props.state ==="checked"){
        return <div className="Product checkedProduct">
        <div className="text"><p className="AmountPlace">{props.amount}x</p> <p>{props.name}</p></div>
        <div>
            <CheckboxChecked />
        </div>
    </div>
    }

   
    return <div className="Product">
        <div className="text"><p className="AmountPlace">{props.amount}x</p> <p>{props.name}</p></div>
        <div>
            <Checkbox />
        </div>
    </div>
}
