import {
    Link
} from 'react-router-dom';
import './List.css';
import { useEffect, useState } from 'react';
import { ReactComponent as TrashIcon } from '../img/trash.svg'
import { Header } from '../Header/header'
import { deleteList, addList } from '../Login/backend';
import { initialList, fetchedList } from '../Login/session';
import { ListInput } from '../Components/Input/Input'

export default function List(){
    const [listFetch, setListFetch] = useState(initialList());
    const [listName, setListName] = useState("");

    useEffect(() => {
        fetchedList().then((data) =>
            setListFetch(data))
    }, [])

    var dateformatter = new Intl.DateTimeFormat('de-DE', { day: "2-digit", month: "2-digit", year: "numeric" })
    let date = dateformatter.format(new Date())

    async function onClickList() {
        if (listName.length > 0) {
            await addList(searchExistingListName(listName, listFetch))
        }
        else {
            await addList(searchExistingListName(date, listFetch))
        }
        const data = await fetchedList()
        setListFetch(data)
    }

    async function onClickTrash(id: number) {
        await deleteList(id)
        const data = await fetchedList()
        setListFetch(data)
    }

    return <div>
        <Header titleName="Einkaufszettel" path="/signin"></Header>
        <div className="listBody" data-testid = "listBody">
            <h1>Einkaufszettel</h1>
            <div className="Add" data-testid = "Add">
                <ListInput place={date} setter={(txt: string) => { setListName(txt) }} />
                <button className="ListButton" data-testid = "listButton" onClick={() => onClickList()}>+</button>
            </div>

            {listFetch.map((list, id) => {
                return (<ListContainer name={list.name} listId={list.id} fetch={()=>onClickTrash(list.id)} key={id}></ListContainer>)
            })}
        </div>
    </div>
}

function ListContainer(props: { name: string, listId: number, fetch: Function}) {
    return <div className="ListContainer" data-testid = "ListContainer"><Link to={`/list/shoppinglist/bearbeiten/?id=${props.listId}`} data-testid = "ButtonLink"><p>{props.name}</p></Link> <button className="DelButton" onClick={() => {props.fetch(props.listId)}}><TrashIcon /></button> </div>
}

export function searchExistingListName(listName: string, listFetch: any) {
    let counter: number = 0
    let countedListName: string = listName;
    let spListName: string[] = [listName]

    let listNameArray = listFetch.map((a: any) => a.name)

    if((countedListName.match(/\d+/i) && !countedListName.includes("_")) || countedListName=== "_"){
        spListName = listName.split('_')
    }

    listNameArray.map((array: any)=> {
        if(array.includes(spListName[0])){
            counter++
        }
        return true
    })

    if (listNameArray.includes(spListName[0])) {
        countedListName = (spListName[0]  + "_" + counter)
    }
    return countedListName
}