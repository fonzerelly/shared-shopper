import './Loading.css'
import { ReactComponent as Logo } from '../img/LogoWhite.svg'
import { session } from '../Login/session'

export function Loading() {
    console.log(session.token)
    return <div className="LoaderBody">
        <Logo />
        <div className="Loader"></div>
    </div>
}