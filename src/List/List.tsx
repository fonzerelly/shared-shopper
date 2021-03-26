import App from "../App"

export default function List() {
    return <div>
        <Header />
        <h2>Einkaufszettel</h2>
        <div>
        <input className="ListInput"></input>
        <button className="ListButton"></button>
        </div>
        <SingleList />
        <SingleList />
        <SingleList />
        <SingleList />
    </div>;
}


function SingleList() {
    return <div><p>02.01.2021</p> <button className="DeleteButton"></button> </div>
}

function Header () {
 return <div className="Header">Einkaufszettel{" > "}list</div>
}