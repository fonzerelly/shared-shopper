import './Loading.css'
import { ReactComponent as Logo } from '../img/LogoWhite.svg'
import { session } from '../Login/session'
import { CheckTokenAvailable } from './checkTokenAvailable'

export function Loading() {
    console.log(session.token)
    CheckTokenAvailable()
    return <div className="LoaderBody">
        <Logo />
        <div className="Loader"></div>
    </div>
}