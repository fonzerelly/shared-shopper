import {
    Link
} from 'react-router-dom';
import './List.css';
import {  useState } from 'react';
import { ReactComponent as TrashIcon } from '../img/trash.svg'
import { Header } from '../Header/header'

export default function List() {
    var dateformatter = new Intl.DateTimeFormat('de-DE', { day: "2-digit", month: "2-digit", year: "numeric" })
    let date = dateformatter.format(new Date())
    const [listName, setListName] = useState("");

    function onClickList() {
        setListName("")
        let newListName = listName
        if (newListName.length > 0) {
            console.log(newListName)
        }

        else {
            console.log(date)
        }

    }
    return <div>
        <Header titleName="Einkaufszettel" path="/signin"></Header>
        <div className="listBody">
            <h1>Einkaufszettel</h1>
            <div className="Add">
                <input type="text" name="name" className="ListInput" placeholder={"Einkaufszettel vom " + date} onChange={() => {}}></input>
                <button className="ListButton" onClick={onClickList}>+</button>
            </div>
            <Link to="/list/shoppinglist/bearbeiten"><ListContainer name={date} /></Link>
            <Link to="/list/shoppinglist/bearbeiten"><ListContainer name="Wochenende" /></Link>
            <Link to="/list/shoppinglist/bearbeiten"><ListContainer name="Party" /></Link>
            <Link to="/list/shoppinglist/bearbeiten"><ListContainer name="Geburtstagsessen" /></Link>
        </div>
    </div>
}


function ListContainer(props: { name: string }) {
    return <div className="ListContainer"><p>{props.name}</p> <button className="DelButton"><TrashIcon /></button> </div>
}