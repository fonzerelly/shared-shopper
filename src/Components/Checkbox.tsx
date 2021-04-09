import './Components.css'

export function Checkbox() {
    return <div className="Checkbox"><input type="checkbox"></input></div>;
}

export function CheckboxChecked() {
    return <div className="Checkbox"><input type="checkbox" defaultChecked={true}></input></div>;
}