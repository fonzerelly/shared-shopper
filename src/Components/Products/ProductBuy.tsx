import './products.css'
import { Checkbox, CheckboxChecked } from '../Checkbox/Checkbox'
import { editMark } from '../../Login/backend'

export function ProductBuy(props: { name: string, amount: number, state: boolean, productId: number, listId: string | null, markFn: Function}) {

    function markItem(){
        props.markFn()
        editMark(props.listId, props.productId)
    }

    if(props.state === true){
        return <div className="Product checkedProduct">
        <div className="text"><p className="AmountPlace">{props.amount}x</p> <p>{props.name}</p></div>
        <div onClick={()=> {markItem()}}>
            <CheckboxChecked />
        </div>
    </div>
    }

   
    return <div className="Product">
        <div className="text"><p className="AmountPlace">{props.amount}x</p> <p>{props.name}</p></div>
        <div onClick={()=> {markItem()}}>
            <Checkbox />
        </div>
    </div>
}
