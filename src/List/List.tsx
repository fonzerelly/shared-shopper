import {
    Link
} from 'react-router-dom';
import './List.css';
import { useEffect, useState } from 'react';
import { ReactComponent as TrashIcon } from '../img/trash.svg'
import { Header } from '../Header/header'
import { deleteList, addList } from '../Login/backend';
import { initialList, fetchedList} from '../Login/session';
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
            await addList(searchExistingListName(listName))
        }
        else {
            await addList(searchExistingListName(date))
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
        <Header titleName="Ihre Einkaufszettel" path="/signin"></Header>
        <div className="listBody" data-testid = "listBody">
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

let names = new Map<string, number>()

export function searchExistingListName(listName: string):string{

    listName = listName.split(/(_\d+)*$/i)[0]
    if(!names.has(listName)) {
        names.set(listName, 0)
    }
    let counter = names.get(listName)!
    names.set(listName, counter+1)

    return counter === 0 ? listName :`${listName}_${counter}`
}