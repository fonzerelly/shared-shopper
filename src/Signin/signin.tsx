import './signin.css'
import InputComp from '../Components/Input'
import {PrimaryButton, SecondaryButton} from '../Components/Button'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom';

export function SignIn() {
    return <>
    <div className="signinbody">
            <Logo />
            <div className="form">
            <InputComp label="Benutzername" place="Benutzername"/>
            <InputComp label="Passwort" place="Passwort"/>
            <Link to="/einkaufszettel"><SecondaryButton name="Login"/></Link>
            <ORSection />
            <Link to="register"><PrimaryButton name="Register"/></Link>
            </div>
    </div>
    </>

}

function Logo() {
    return <div className="logoPlace"> 
    <div className="Logo"><svg width="179" height="188" viewBox="0 0 179 188" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0)">
    <path d="M174.761 79.9L147.345 58.186L148.57 67.586C133.862 63.8487 118.798 61.6746 103.632 61.1C45.5037 61.1 0 86.762 0 119.38C0 135.172 10.6458 149.836 30.0532 160.74L34.6695 152.562C18.8421 143.35 9.42105 131.6 9.42105 119.38C9.42105 92.872 52.5695 70.5 103.632 70.5C117.951 71.1175 132.163 73.2603 146.026 76.892L139.997 84.318L174.761 79.9Z" fill="#FE6019"/>
    <path d="M150.737 47H56.5263V42.3C56.5512 31.089 61.0258 20.3442 68.9709 12.4168C76.9161 4.4894 87.6849 0.0248307 98.921 0H108.342C119.578 0.0248307 130.347 4.4894 138.292 12.4168C146.237 20.3442 150.712 31.089 150.737 42.3V47ZM65.9474 37.6H141.316C140.175 29.712 136.204 22.5053 130.139 17.3187C124.074 12.1321 116.329 9.31832 108.342 9.4H98.921C90.934 9.31832 83.1887 12.1321 77.1241 17.3187C71.0595 22.5053 67.088 29.712 65.9474 37.6V37.6Z" fill="#FE6019"/>
    <path d="M37.6842 71.628V70.5C37.6842 64.2674 40.1656 58.2901 44.5826 53.883C48.9996 49.4759 54.9903 47 61.2368 47H146.026C149.967 47.0066 153.843 47.9996 157.3 49.8882C160.756 51.7768 163.682 54.5006 165.811 57.81L173.724 52.64C170.734 48.0242 166.632 44.2295 161.794 41.6022C156.956 38.975 151.535 37.599 146.026 37.6H61.2368C52.4917 37.6 44.1047 41.0662 37.9209 47.2362C31.7372 53.4061 28.2632 61.7744 28.2632 70.5V76.422C31.1837 75.2 34.3868 73.132 37.6842 71.628Z" fill="#FE6019"/>
    <path d="M169.579 155.1C169.579 161.333 167.098 167.31 162.681 171.717C158.264 176.124 152.273 178.6 146.026 178.6H61.2368C54.9903 178.6 48.9996 176.124 44.5826 171.717C40.1656 167.31 37.6842 161.333 37.6842 155.1V87.42C34.4062 89.132 31.2576 91.0798 28.2632 93.248V155.1C28.2632 163.826 31.7372 172.194 37.9209 178.364C44.1047 184.534 52.4917 188 61.2368 188H146.026C154.771 188 163.158 184.534 169.342 178.364C175.526 172.194 179 163.826 179 155.1V94H169.579V155.1Z" fill="#FE6019"/>
    </g>
    <defs>
    <clipPath id="clip0">
    <rect width="179" height="188" fill="white"/>
    </clipPath>
    </defs>
    </svg>
    </div>
    <div className="logoText">Shared Shopper</div>
    </div>
} 

function ORSection() {
    return <div className="orSection">
        <div className="line"></div>
        <p>ODER</p>
        <div className="line"></div>

    </div>
}