import './signin.css'
import Logosvg from '../../Components/Logo'
import { PrimaryButton, SecondaryButton } from '../../Components/Button'
import {Link} from 'react-router-dom';

export function SignIn() {
    return (
        <div className="signinbody">
            <Logosvg />
            <div className="form">
                {/* <InputComp label="Benutzername" place="Benutzername" /> */}
                {/* <InputComp label="Passwort" place="Passwort" /> */}
                <Link to="/einkaufszettel"><SecondaryButton name="Login" /></Link>
                <ORSection />
                <Link to="register"><PrimaryButton name="Register" /></Link>
            </div>
        </div>
    )
}


function ORSection() {
    return <div className="orSection">
        <div className="line"></div>
        <p>ODER</p>
        <div className="line"></div>

    </div>
}