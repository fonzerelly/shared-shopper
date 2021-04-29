import './input.css'

export default function InputComp(props:{place:string, label:string, setter: Function}) {
    return <div className="formInput">
    <label>{props.label}</label>
    <input className="inputComp" placeholder={props.place} onChange={(e) => { props.setter(e.target.value)}}></input>
    </div>
}