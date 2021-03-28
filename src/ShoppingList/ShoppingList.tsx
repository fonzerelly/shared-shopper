import App from "../App"
import '../List/List.css';
import Header from '../Header/Header'
import Product from '../Product/Product'


export default function ShoppingList() {
    return <div>
        <Header />
        <h1>29.03.2021</h1>
        <div className="tab">
            <button className="tablinks" >London</button>
            <button className="tablinks" >Paris</button>
        </div>

        <div id="London" className="tabcontent">
            <h3>London</h3>
            <p>London is the capital city of England.</p>
        </div>

        <div id="Paris" className="tabcontent">
            <h3>Paris</h3>
            <p>Paris is the capital of France.</p>
        </div>

        <div className="Add">
            <input className="ListInput"></input>
            <button className="ListButton">+</button>
        </div>

        <Product />
    </div>;
}