import './products.css'
import {Checkbox, CheckboxChecked} from '../Checkbox/Checkbox'

export function ProductBuy(props:{name:string, amount:string}) {
    return <div className="Product">
        <p className="productText">{props.amount}x {props.name}</p>
        <div>
        <Checkbox />
        </div>
    </div>
}

export function ProductBuyChecked(props:{name:string, amount:string}) {
    return <div className="Product checkedProduct">
        <p className="productText">{props.amount}x {props.name}</p>
    <div>
    <CheckboxChecked />
    </div>
    </div>
}