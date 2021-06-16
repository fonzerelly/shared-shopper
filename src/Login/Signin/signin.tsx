import './signin.css'
import { useEffect, useState } from 'react'
import Logosvg from '../../Components/Logo/Logo'
import { PrimaryButton } from '../../Components/Buttons/Button'
import { Link, useHistory } from 'react-router-dom';
import InputComp from '../../Components/Input/Input';
import { aquireToken } from '../backend'
import '../../Components/Buttons/button.css'
import { session } from '../session';

export function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [readyToLoad, setReadyToLoad] = useState(false)
    const history = useHistory()
    useEffect(() => {
        if (readyToLoad === true) {
            aquireToken(email, password).then((token) => {
                session.token = token;
                history.push("/list") 
                //  Variable (URL) anlegen, weiterleitung 
                //  auf 404 Seite wenn Seite nicht verfügbar
            })
        }
    }, [readyToLoad])
    const callToken = async () => {
        setReadyToLoad(true)
    }
    return (
        <div className="signinbody">
            <Logosvg />
            <div className="form">
                <InputComp label="E-Mail" place="E-Mail" type="email" setter={(txt: string) => { setEmail(txt) }} />
                <InputComp label="Passwort" place="Passwort" type="password" setter={(txt: string) => { setPassword(txt) }} />
                <button className="SecondaryButton" onClick={() => { callToken() }}>Login</button>
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