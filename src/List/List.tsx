import {
    Switch,
    Route,
    Link
} from 'react-router-dom';
import './List.css';
import Header from '../Header/Header'
import { ChangeEventHandler, useState } from 'react';

export default function List() {
    var dateformatter = new Intl.DateTimeFormat('de-DE', { day:"2-digit" , month:"2-digit" , year:"numeric" })
    let date = dateformatter.format(new Date())
    const [listName, setListName] = useState("");
    const onChangeListListener:ChangeEventHandler<HTMLInputElement> = (event) => {
        setListName(event.target.value)
    }
    function onClickList() {
        let newListName = listName
        if (newListName.length > 0) {
            console.log(newListName)
        }

        else {
            console.log(date)
        }

    }
    return <div>
        <Header />
        <h1>Einkaufszettel</h1>
        <div className="Add">
            <input type="text" name="name" className="ListInput" placeholder={"Einkaufszettel vom " + date} onChange={onChangeListListener}></input>
            <button className="ListButton" onClick={onClickList}>+</button>
        </div>
        <Link to="/list/shoppinglist/bearbeiten"><ListContainer name={date}/></Link>
        <Link to="/list/shoppinglist/bearbeiten"><ListContainer name="Wochenende"/></Link>
        <Link to="/list/shoppinglist/bearbeiten"><ListContainer name="Party"/></Link>
        <Link to="/list/shoppinglist/bearbeiten"><ListContainer name="Geburtstagsessen"/></Link>
    </div>;
}


function ListContainer(props:{name:string}) {
    return <div className="ListContainer"><p>{props.name}</p> <button className="DelButton"><DelIcon /></button> </div>
}

function DelIcon() {
    return <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.1446 3.10532C17.0744 3.03517 16.9845 2.99991 16.8752 2.99991H13.2539L12.4336 1.04299C12.3165 0.753857 12.1055 0.507743 11.801 0.304605C11.4962 0.101508 11.1874 0 10.875 0H7.1249C6.8125 0 6.50383 0.101508 6.19915 0.304605C5.89442 0.507743 5.68348 0.753816 5.56625 1.04299L4.74594 2.99991H1.12484C1.01537 2.99991 0.925638 3.03517 0.855285 3.10532C0.785137 3.17563 0.749878 3.26552 0.749878 3.37487V4.12495C0.749878 4.2343 0.784973 4.32419 0.855285 4.39438C0.925638 4.46465 1.01553 4.49978 1.12484 4.49978H2.24975V15.6562C2.24975 16.3048 2.43335 16.8574 2.80051 17.3144C3.16775 17.7716 3.60916 18 4.12483 18H13.8751C14.3908 18 14.8322 17.7637 15.1994 17.2912C15.5666 16.8183 15.75 16.2579 15.75 15.6095V4.49978H16.8752C16.9844 4.49978 17.0744 4.46465 17.1446 4.39438C17.2147 4.32423 17.25 4.2343 17.25 4.12495V3.37487C17.2501 3.26552 17.2147 3.17563 17.1446 3.10532ZM6.94918 1.62864C7.00382 1.55836 7.07027 1.51527 7.14838 1.49975H10.8632C10.9413 1.51539 11.0079 1.55845 11.0625 1.62864L11.6252 2.99975H6.37495L6.94918 1.62864ZM14.2502 15.6095C14.2502 15.7814 14.2229 15.9396 14.1681 16.0841C14.1134 16.2285 14.0566 16.334 13.9981 16.4004C13.9394 16.467 13.8987 16.5 13.8751 16.5H4.12487C4.10143 16.5 4.06063 16.467 4.0019 16.4004C3.94324 16.334 3.88656 16.2285 3.83184 16.0841C3.77721 15.9396 3.74987 15.7812 3.74987 15.6095V4.49978H14.2501V15.6095H14.2502Z" fill="#292929" />
        <path d="M5.62502 14.2501H6.37498C6.48445 14.2501 6.57438 14.215 6.64453 14.1448C6.71468 14.0743 6.74993 13.9846 6.74993 13.8751V7.12487C6.74993 7.01556 6.71468 6.92567 6.64453 6.85531C6.57417 6.78517 6.48449 6.75003 6.37498 6.75003H5.62502C5.51555 6.75003 5.42578 6.78513 5.35547 6.85531C5.28524 6.92567 5.25006 7.01556 5.25006 7.12487V13.8751C5.25006 13.9846 5.28511 14.0743 5.35547 14.1448C5.42578 14.215 5.51555 14.2501 5.62502 14.2501Z" fill="#292929" />
        <path d="M8.62502 14.2501H9.37498C9.48441 14.2501 9.5743 14.215 9.6444 14.1448C9.71492 14.0743 9.74985 13.9846 9.74985 13.8751V7.12487C9.74985 7.01556 9.71488 6.92567 9.6444 6.85531C9.5743 6.78517 9.48441 6.75003 9.37498 6.75003H8.62502C8.51567 6.75003 8.42578 6.78513 8.35547 6.85531C8.28511 6.92567 8.25006 7.01556 8.25006 7.12487V13.8751C8.25006 13.9846 8.28511 14.0743 8.35547 14.1448C8.42574 14.215 8.51567 14.2501 8.62502 14.2501Z" fill="#292929" />
        <path d="M11.6251 14.2501H12.3749C12.4845 14.2501 12.5744 14.215 12.6446 14.1448C12.7148 14.0743 12.7498 13.9846 12.7498 13.8751V7.12487C12.7498 7.01556 12.7148 6.92567 12.6446 6.85531C12.5744 6.78517 12.4845 6.75003 12.3749 6.75003H11.6251C11.5155 6.75003 11.4259 6.78513 11.3554 6.85531C11.2852 6.92567 11.2501 7.01556 11.2501 7.12487V13.8751C11.2501 13.9846 11.2852 14.0743 11.3554 14.1448C11.4259 14.215 11.5155 14.2501 11.6251 14.2501Z" fill="#292929" />
    </svg>
}