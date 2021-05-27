import './signin.css'
import Logosvg from '../../Components/Logo/Logo'
import { PrimaryButton } from '../../Components/Buttons/Button'
import { Link } from 'react-router-dom';
import InputComp from '../../Components/Input/Input';
import {LoginToken} from '../backend'
import '../../Components/Buttons/button.css'


export function SignIn() {
    
    return (
        <div className="signinbody">
            <Logosvg />
            <div className="form">
                <InputComp label="E-Mail" place="E-Mail" type="email" setter={() => { }} />
                <InputComp label="Passwort" place="Passwort" type="password" setter={() => { }} />
                <button className="SecondaryButton" onClick={() => {LoginToken().then(console.log)}}>Login</button>
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