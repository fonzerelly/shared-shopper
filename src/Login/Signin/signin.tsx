import './signin.css'
import { useEffect, useState } from 'react'
import Logosvg from '../../Components/Logo/Logo'
import { PrimaryButton } from '../../Components/Buttons/Button'
import { Link, useHistory } from 'react-router-dom';
import {InputComp} from '../../Components/Input/Input';
import {aquireToken} from '../backend'
import '../../Components/Buttons/button.css'
import { session } from '../session';
import {useToken} from '../../useToken/useToken'
import { useSecret, urlCheck } from '../../secret/secret';

export function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [readyToLoad, setReadyToLoad] = useState(false)
    const { setToken } = useToken();
    const {secret, setSecret} = useSecret();
    const history = useHistory()

    useEffect(() => {
        if (readyToLoad === true) {
            aquireToken(email, password, secret).then((token) => {
                setToken(token)
                history.push(session.url) 
            })
        }
    }, [readyToLoad, password, email, history, secret])

    const callToken = async () => {
        setSecret(urlCheck())
        setReadyToLoad(true)
    }
    return (
        <div className="signinbody">
            <Logosvg />
            <div className="form">
                <InputComp label="E-Mail" place="E-Mail" type="email" setter={(txt: string) => { setEmail(txt) }} />
                <InputComp label="Passwort" place="Passwort" type="password" setter={(txt: string) => { setPassword(txt) }} />
                <button className="SecondaryButton" data-testid="SecondaryButton" onClick={() => { callToken() }}>Login</button>
                <ORSection />
                <Link to="register" data-testid="registerButton"><PrimaryButton name="Register" /></Link>
            </div>
        </div>
    )
}

function ORSection() {
    return <div className="orSection">
        <div className="line" data-testid="line1"></div>
        <p>ODER</p>
        <div className="line" data-testid="line2"></div>

    </div>
}