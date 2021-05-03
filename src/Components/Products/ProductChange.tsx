import './products.css'
import {ReactComponent as TrashIcon} from '../../img/trash.svg'
import {ReactComponent as UpIcon} from '../../img/up.svg'
import {ReactComponent as DownIcon} from '../../img/down.svg'
export default function ProductChange(props:{name:string, amount:string}) {
    return <div className="Product">
        <div className="text">
        <TrashIcon className="trash"/>
        <p>{props.amount}x {props.name}</p>
        </div>
        <div className="Up_Down">
        <button className="UpButton"><UpIcon/></button>
        <button className="UpButton"><DownIcon /></button>
        </div>
    </div>
}