import {
    Link
} from 'react-router-dom';
import './header.css'
import {ReactComponent as Backward} from '../img/backwards.svg'

export function Header(props: {titleName: string, path: string}) {
    return <div className="Header" >
        <BackwardsButton path={props.path}  />
        <p className="Titel">{props.titleName}</p>
        <div className="Placeholder"></div>
    </div>
}

function BackwardsButton(props:{path: string}) {
    return <Link to={props.path}><button className="Button"><Backward /></button></Link>
}