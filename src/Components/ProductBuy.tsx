import './Components.css';
import {Checkbox, CheckboxChecked} from './Checkbox'

export function ProductBuy(props:{name:string, amount:string}) {
    return <div className="Product">
        <div>{props.amount}x</div>
        <p>{props.name}</p>
        <div>
        <Checkbox />
        </div>
    </div>
}

export function ProductBuyChecked(props:{name:string, amount:string}) {
    return <div className="Product checked">
    <div>{props.amount}x</div>
        <p>{props.name}</p>
    <div>
    <CheckboxChecked />
    </div>
    </div>
}