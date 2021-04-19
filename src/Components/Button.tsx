import './Components.css'

export function PrimaryButton(props:{name:string}) {
    return <button className="PrimaryButton">{props.name}</button>
}

export function SecondaryButton(props:{name:string}) {
    return <button className="SecondaryButton">{props.name}</button>
}