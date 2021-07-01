import './products.css'
import { Checkbox, CheckboxChecked } from '../Checkbox/Checkbox'
import { editMark } from '../../Login/backend'

export function ProductBuy(props: { name: string, amount: number, state: boolean, productId: number, listId: string | null, markFn: Function}) {

    async function markItem(){
        await editMark(props.listId, props.productId)
        props.markFn()
    }

    if(props.state === true){
        return <div className="Product checkedProduct" data-testid="product--checked">
        <div className="text"><p className="AmountPlace">{props.amount}x</p> <p>{props.name}</p></div>
        <button onClick={()=> {markItem()}} data-testid="CheckBoxChecked">
            <CheckboxChecked />
        </button>
    </div>
    }

   
    return <div className="Product" data-testid="product--unchecked">
        <div className="text" data-testid="text"><p className="AmountPlace">{props.amount}x</p> <p>{props.name}</p></div>
        <button onClick={()=> {markItem()}} data-testid="CheckBox">
            <Checkbox />
        </button>
    </div>
}
