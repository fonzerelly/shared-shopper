import './register.css'
import InputComp from '../Components/Input'
import Logosvg from '../Components/Logo'
import {PrimaryButton, SecondaryButton} from '../Components/Button'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom';

export function Register() {
    return <>
    <div className="registerbody">
            <Logosvg />
            <div className="registertext">
            <h1>Registrierung</h1>
            <p>Schon bald kann es <strong >Losgehen!</strong></p>
            <p>Registrieren und direkt gemeinsm Einkaufen.</p>
            <strong>Einfach, aktuell und intuitiv. </strong>
            </div>
            <div className="form">
            <InputComp label="Benutzername" place="Benutzername"/>
            <InputComp label="Passwort" place="Passwort"/>
            <InputComp label="Passwort wiederholen" place="Passwort"/>
            <Link to="signin"><PrimaryButton name="Jetzt zusammen einkaufen!"/></Link>
            </div>
    </div>
    </>
}

