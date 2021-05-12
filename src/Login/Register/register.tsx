import { useState } from 'react'
import './register.css'
import InputComp from '../../Components/Input/Input'
import Logosvg from '../../Components/Logo/Logo'
import { PrimaryButton } from '../../Components/Buttons/Button'
import {
  Link
} from 'react-router-dom';


export const handleEmail = (txt: string) => {

  if (txt.match(/[a-z]+(\.|-)[a-z]+@\w{2,}\.[a-z]{2,3}/g)) {
    return true;
  }
  else {
    return false;
  }
}


export function Register(props: {checkFunction: Function}) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const [password, setPassword] = useState("");
  const [errorPW, setErrorPW] = useState("");
  const [errorPWcheck, setErrorPWcheck] = useState("");


  const errorRender = (txt: string) => {

    const emailCheck = props.checkFunction(txt);

    if (emailCheck === true){
      setError("");
      setEmail(txt);
      console.log(email);
    }
    else{
      setError("Bitte überprüfen Sie ihre Email-Adresse");
    }


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
        <p>Schon bald kann es <strong >Losgehen!</strong></p>
        <p>Registrieren und direkt gemeinsm Einkaufen.</p>
        <strong>Einfach, aktuell und intuitiv. </strong>
      </div>
      <div className="form">
        <InputComp label="E-Mail" type="email" place="E-Mail" setter={errorRender} />
        <p className="validError">{error}</p>
        <InputComp label="Passwort" type="password" place="Passwort" setter={handlePassword} />
        <p className="validError">{errorPW}</p>
        <InputComp label="Passwort wiederholen" type="password" place="Passwort" setter={handlePasswordCheck} />
        <p className="validError">{errorPWcheck}</p>
        <Link to="signin"><PrimaryButton name="Jetzt zusammen einkaufen!" /></Link>
      </div>
    </div>
  </>
}

