import './products.css'
import { Checkbox, CheckboxChecked } from '../Checkbox/Checkbox'
import { editMark } from '../../Login/backend'

export function ProductBuy(props: { name: string, amount: number, state: boolean, productId: number, listId: string | null}) {

    if(props.state === true){
        return <div className="Product checkedProduct">
        <div className="text"><p className="AmountPlace">{props.amount}x</p> <p>{props.name}</p></div>
        <div>
            <CheckboxChecked />
        </div>
    </div>
    }

   
    return <div className="Product">
        <div className="text"><p className="AmountPlace">{props.amount}x</p> <p>{props.name}</p></div>
        <div onClick={()=> {editMark(props.state, props.listId, props.productId)}}>
            <Checkbox />
        </div>
    </div>
}
