import './Components.css';

export default function ProductChange(props:{name:string, amount:string}) {
    return <div className="Product">
        <div>{props.amount}x</div>
        <p>{props.name}</p>
        <div className="Up_Down">
        <button className="UpButton">-</button>
        <button className="UpButton">+</button>
        </div>
    </div>
}