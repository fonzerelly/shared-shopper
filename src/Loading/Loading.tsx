import './Loading.css'
import { ReactComponent as Logo } from '../img/LogoWhite.svg'
import { useHistory } from 'react-router'

export function Loading() {
    const history = useHistory()
    setTimeout(() => {history.push('/signin')}, 1000);
    return <div className="LoaderBody">
        <Logo />
        <div className="Loader"></div>
    </div>
}