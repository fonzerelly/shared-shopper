import './input.css'

export default function InputComp(props:{place:string, label:string, type:string, setter: Function}) {
    return <div className="formInput">
    <label>{props.label}</label>
    <input type={props.type} className="inputComp" placeholder={props.place} onChange={(e) => { props.setter(e.target.value)}}></input>
    </div>
}