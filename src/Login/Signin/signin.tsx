import './signin.css'
import Logosvg from '../../Components/Logo/Logo'
import { PrimaryButton, SecondaryButton } from '../../Components/Buttons/Button'
import {Link} from 'react-router-dom';
import InputComp from '../../Components/Input/Input'

export function SignIn() {
    return (
        <div className="signinbody">
            <Logosvg />
            <div className="form">
               <InputComp label="Benutzername" place="Benutzername" type="email" setter={() => {}} /> 
               <InputComp label="Passwort" place="Passwort" type="password" setter={() => {}} />
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