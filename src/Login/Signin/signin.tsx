import './signin.css'
import { useState } from 'react'
import Logosvg from '../../Components/Logo/Logo'
import { PrimaryButton } from '../../Components/Buttons/Button'
import { Link } from 'react-router-dom';
import InputComp from '../../Components/Input/Input';
import {aquireToken} from '../backend'
import '../../Components/Buttons/button.css'

export function SignIn() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const callToken = () => {
        aquireToken(email, password)
            .then(console.log)
       }
    
    return (
        <div className="signinbody">
            <Logosvg />
            <div className="form">
                <InputComp label="E-Mail" place="E-Mail" type="email" setter={(txt: string) => {setEmail(txt)}} />
                <InputComp label="Passwort" place="Passwort" type="password" setter={(txt:string) => {setPassword(txt)}} />
                <Link to="/list"><button className="SecondaryButton" onClick={() => {callToken()}}>Login</button></Link>
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