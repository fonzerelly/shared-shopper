import './Loading.css'
import { ReactComponent as Logo } from '../img/LogoWhite.svg'

export function Loading() {
    return <div className="LoaderBody">
        <Logo />
        <div className="Loader"></div>
    </div>
}