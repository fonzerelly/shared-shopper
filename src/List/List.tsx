import {
    Link
} from 'react-router-dom';
import './List.css';
import { ChangeEventHandler, useEffect, useState } from 'react';
import { ReactComponent as TrashIcon } from '../img/trash.svg'
import { Header } from '../Header/header'
import { getList } from '../Login/backend'

export default function List() {
    const [listFetch, setListFetch] = useState([{
        id: 0,
        name: '',
        content: []
    }]);

    useEffect(() => {
        getList().then((data) =>
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
                return (<ListContainer key={id} name={list.name}></ListContainer>)

            })}
        </div>
    </div>
}


function ListContainer(props: { name?: string }) {
    return <div className="ListContainer" onClick={() => { }}><p>{props.name}</p> <button className="DelButton"><TrashIcon /></button> </div>
}