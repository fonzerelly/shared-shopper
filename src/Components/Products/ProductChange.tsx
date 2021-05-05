import './products.css'
import {ReactComponent as PencilIcon} from '../../img/pencil.svg'
import {ReactComponent as UpIcon} from '../../img/up.svg'
import {ReactComponent as DownIcon} from '../../img/down.svg'
export default function ProductChange(props:{name:string, amount:string}) {
    return <div className="Product">
        <div className="text">
        <PencilIcon className="pencil"/>
        <p className="AmountPlace">{props.amount}x</p> <p>{props.name}</p>
        </div>
        <div className="Up_Down">
        <button className="UpButton"><UpIcon/></button>
        <button className="UpButton"><DownIcon /></button>
        </div>
    </div>
}