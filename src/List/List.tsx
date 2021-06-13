import {
    Link
} from 'react-router-dom';
import './List.css';
import { ChangeEventHandler, useEffect, useState } from 'react';
import { ReactComponent as TrashIcon } from '../img/trash.svg'
import { Header } from '../Header/header'
import { deleteList, addList } from '../Login/backend';
import { initialList, fetchedList } from '../Login/session';
import {ListInput} from '../Components/Input/Input'

export default function List() {
    const [listFetch, setListFetch] = useState(initialList());

    useEffect(() => {
        fetchedList().then((data) =>
            setListFetch(data))
    }, [])


    //var dateformatter = new Intl.DateTimeFormat('de-DE', { day: "2-digit", month: "2-digit", year: "numeric" })
    //let date = dateformatter.format(new Date())
    const [listName, setListName] = useState("");
    //const onChangeListListener: ChangeEventHandler<HTMLInputElement> = (event) => {
      //  setListName(event.target.value)
    //}
    function onClickList() {
        let newListName = listName

        console.log(listName)
        addList(listName)
        fetchedList().then((data) =>
            setListFetch(data))

        // if (newListName.length > 0) {
        //    console.log(newListName)
            
        //}
        //else {
           // console.log(date)
        //}
    }
    return <div>
        <Header titleName="Einkaufszettel" path="/signin"></Header>
        <div className="listBody">
            <h1>Einkaufszettel</h1>
            <div className="Add">
                <ListInput place= "Neue Einkaufsliste" setter={(txt: string) => {setListName(txt)}} />
                <button className="ListButton" onClick={() => onClickList()}>+</button>
            </div>

            {listFetch.map((list, id) => {
                return (<Link to="/list/shoppinglist/bearbeiten" key={id}><ListContainer name={list.name} id={list.id}></ListContainer></Link>)
            })}
        </div>
    </div>
}



function ListContainer(props: { name: string, id: number }) {
    return <div className="ListContainer"><p>{props.name}</p> <button className="DelButton" onClick={() => {deleteList(props.id)}}><TrashIcon /></button> </div>
}