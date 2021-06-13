import {
    Link
} from 'react-router-dom';
import './List.css';
import { ChangeEventHandler, useEffect, useState } from 'react';
import { ReactComponent as TrashIcon } from '../img/trash.svg'
import { Header } from '../Header/header'
import { CheckTokenAvailable } from '../Loading/checkTokenAvailable';
import { deleteList } from './deleteList';
import { initialList, fetchedList } from '../Login/session';

export default function List() {
    const [listFetch, setListFetch] = useState(initialList());

    useEffect(() => {
        fetchedList().then((data) =>
            setListFetch(data))
    }, [])


    var dateformatter = new Intl.DateTimeFormat('de-DE', { day: "2-digit", month: "2-digit", year: "numeric" })
    let date = dateformatter.format(new Date())
    const [listName, setListName] = useState("");
    const onChangeListListener: ChangeEventHandler<HTMLInputElement> = (event) => {
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
        <Header titleName="Einkaufszettel" path="/signin"></Header>
        <div className="listBody">
            <h1>Einkaufszettel</h1>
            <div className="Add">
                <input type="text" name="name" className="ListInput" placeholder={"Einkaufszettel vom " + date} onChange={onChangeListListener}></input>
                <button className="ListButton" onClick={onClickList}>+</button>
            </div>

            {listFetch.map((list, id) => {
                return (<Link to="/list/shoppinglist/bearbeiten" key={id}><ListContainer name={list.name}></ListContainer></Link>)

            })}
        </div>
    </div>
}



function ListContainer(props: { name: string }) {
    return <div className="ListContainer"><p>{props.name}</p> <button className="DelButton" onClick={() => {deleteList(0)}}><TrashIcon /></button> </div>
}