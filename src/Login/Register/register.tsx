import { useState } from 'react'
import './register.css'
import InputComp from '../../Components/Input/Input'
import Logosvg from '../../Components/Logo/Logo'
import { PrimaryButton } from '../../Components/Buttons/Button'
import {
  Link
} from 'react-router-dom';

export function Register() {

  //const [loginModel, setLoginModel] = useState(initLoginModel);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const [passwordRepeat, setPasswordRepeat] = useState("");
  const [error, setError] = useState("");
  const [errorPW, setErrorPW] = useState("");
  const [errorPWcheck, setErrorPWcheck] = useState("");

  const handleEmail = (txt: string) => {
    if (!txt.includes("@")) {
      setError("Das ist keine Email")
    }
    else {
      setError("")
    }

    setEmail(txt)
  }

  const handlePassword = (txt: string) => {
    if(txt.match(/[a-z]/g) && txt.match(/[A-Z]/g) && txt.match(/[0-9]/g) && txt.match(/[^a-zA-Z\d]/) && txt.length > 5){
      setErrorPW("")
      setPassword(txt);
    }
    else {
      setErrorPW("Das Passwort muss aus mindestens 6 Zeichen, Groß-, Kleinbuchstaben, Ziffern sowie Sonderzeichen bestehen.")
    }
  }

  const handlePasswordCheck = (txt: string) => {

    if (txt !== password) {
      setErrorPWcheck("Die beiden Passwörter müssen übereinstimmen")
    }
    else {
      setErrorPWcheck("Passwörter stimmen überein")
    }

  }

  return <>
    <div className="registerbody">
      <Logosvg />
      <div className="registertext">
        <h1>Registrierung</h1>
        <p>Ihr Erster Login!</p>
        <p>Schon bald kann es <strong >Losgehen!</strong></p>
        <p>Registrieren und direkt gemeinsm Einkaufen.</p>
        <strong>Einfach, aktuell und intuitiv. </strong>
      </div>
      <div className="form">
        <InputComp label="E-Mail" place="E-Mail" setter={handleEmail} />
        <p className="validError">{error}</p>
        <InputComp label="Passwort" place="Passwort" setter={handlePassword} />
        <p className="validError">{errorPW}</p>
        <InputComp label="Passwort wiederholen" place="Passwort" setter={handlePasswordCheck} />
        <p className="validError">{errorPWcheck}</p>
        <Link to="signin"><PrimaryButton name="Jetzt zusammen einkaufen!" /></Link>
      </div>

      <button onClick={() => alert(email)}>click me</button>
    </div>
  </>
}

