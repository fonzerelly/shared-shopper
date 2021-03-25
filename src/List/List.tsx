export default function List() {
    return <div>
        <h2>Einkaufszettel</h2>
        <input className="ListInput"></input>
        <button className="ListButton"></button>
        <SingleList />
        <SingleList />
        <SingleList />
        <SingleList />
    </div>;
}


function SingleList() {
    return <div><p>02.01.2021</p> <button className="DeleteButton"></button> </div>
}