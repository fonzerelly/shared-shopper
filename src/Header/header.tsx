import {
    Link
} from 'react-router-dom';
import './header.css'
import { ReactComponent as Backward } from '../img/backwards.svg'

export function Header(props: { titleName: string, path: string, list: boolean }) {
    let buttonSwitch = <BackwardsButton path={props.path}></BackwardsButton>
    if (props.list){
        buttonSwitch = <LogoutButton path={props.path}></LogoutButton>
    }

    return <div className="Header" >
        {buttonSwitch}
        <p className="Titel">{props.titleName}</p>
        <div className="Placeholder"></div>
    </div>
}

function BackwardsButton(props: { path: string }) {
    return <div><Link to={props.path} data-testid="BackButton"><button className="Button"><Backward /></button></Link></div>
}

function LogoutButton(props: { path: string }) {
    return <div><Link to={props.path} data-testid="LogoutButton"><button className="Button" onClick={() => sessionStorage.clear()}><Backward /></button></Link></div>
}