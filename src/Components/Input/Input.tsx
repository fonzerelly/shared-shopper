import './input.css'
import '../../List/List.css';

export  function InputComp(props:{place:string, label:string, type:string, setter: Function}) {
    return <div className="formInput">
    <label>{props.label}</label>
    <input type={props.type} data-testid="inputComp" className="inputComp" placeholder={props.place} onChange={(e) => { props.setter(e.target.value)}}></input>
    </div>
}

export function ListInput(props:{place:string, setter: Function, value: string}) {
    return <input className="ListInput" value={props.value} placeholder={props.place} onChange={(e) => { props.setter(e.target.value)}}></input>
}