import './checkbox.css'

export function Checkbox() {
    return <div className="Checkbox"><input type="checkbox"></input></div>;
}

export function CheckboxChecked() {
    return <div className="Checkbox checked"><input type="checkbox" defaultChecked={true}></input></div>;
}