import './List.css';
import './List';
import { urlCheck } from "../secret/secret";
import { session } from '../Login/session';

 
export async function deleteList(id: number) {
    const secret = urlCheck();
    const response = await fetch("http://localhost:3000/overview", {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "x-shared-shopper-secret": `${secret}`,
            "authorization": `${session.token}`,
        },
        body: JSON.stringify({
            "id" : `id:${id}`
        })
    })
    
.then((data) => console.log(data))  

}






