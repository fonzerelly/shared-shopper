import './Components.css'

export default function InputComp(props:{place:string, label:string}) {
    return <div className="formInput">
    <label>{props.label}</label>
    <input className="inputComp" placeholder={props.place}></input>
    </div>
} 