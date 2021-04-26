import { useState } from 'react'
import './register.css'
import InputComp from '../../Components/Input'
import Logosvg from '../../Components/Logo'
import { PrimaryButton} from '../../Components/Button'
import {
  Link
} from 'react-router-dom';

export function Register() {

  //const [loginModel, setLoginModel] = useState(initLoginModel);

  const [email, setEmail] = useState("");
  //const [password, setPassword] = useState("");
  //const [passwordRepeat, setPasswordRepeat] = useState("");
  const [error, setError] = useState("");

  const handleEmail = (txt: string) => {
    if (!txt.includes("@")) {
      setError("Das ist keine Email")
    }
    else {
      setError("")
    } 
    
    setEmail(txt)
  }

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
        <p>{error}</p>
        <InputComp label="E-Mail" place="E-Mail" setter={handleEmail} />
        <InputComp label="Passwort" place="Passwort" setter = {setEmail} /*setter={setPassword}*/ />
        <InputComp label="Passwort wiederholen" place="Passwort" setter = {setEmail}/*setter={setPasswordRepeat}*/ />
        <Link to="signin"><PrimaryButton name="Jetzt zusammen einkaufen!" /></Link>
      </div>

      <button onClick={() => alert(email)}>click me</button>
    </div>
  </>
}

