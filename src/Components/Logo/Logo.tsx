import {ReactComponent as Logosvg} from '../../img/Logo.svg' 
import './logo.css'

export default function Logo () {
    return <div className="logoPlace" data-testid="logoTest"> 
    <Logosvg/>
    <div className="logoText">Shared Shopper</div>
    </div>
}