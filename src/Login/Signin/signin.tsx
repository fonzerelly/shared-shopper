import './signin.css'
import { useState } from 'react'
import Logosvg from '../../Components/Logo/Logo'
import { PrimaryButton } from '../../Components/Buttons/Button'
import { Link, useHistory } from 'react-router-dom';
import InputComp from '../../Components/Input/Input';
import {aquireToken} from '../backend'
import '../../Components/Buttons/button.css'
import { session } from '../session';

export function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory()
    const callToken = async () => {
        session.token = await aquireToken(email, password)
        history.push('/')
        }
    return (
        <div className="signinbody">
            <Logosvg />
            <div className="form">
                <InputComp label="E-Mail" place="E-Mail" type="email" setter={(txt: string) => {setEmail(txt)}} />
                <InputComp label="Passwort" place="Passwort" type="password" setter={(txt:string) => {setPassword(txt)}} />
                <button className="SecondaryButton" onClick={() => {callToken()}}>Login</button>
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