import './button.css'

export function PrimaryButton(props:{name:string}) {
    return <button className="PrimaryButton" data-testid="PrimaryButton">{props.name}</button>
}

export function SecondaryButton(props:{name:string}) {
    return <button className="SecondaryButton">{props.name}</button>
}