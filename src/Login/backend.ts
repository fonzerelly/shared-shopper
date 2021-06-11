import { urlCheck } from "../secret/secret"
import {session} from "./session"

export function aquireToken(email: string, password: string) {
    const secret = urlCheck();
    return fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "x-shared-shopper-secret": `${secret}`,
        },
        body: JSON.stringify({
            "email": `${email}`,
            "password": `${password}`
        })
    })
        .then((response) => response.json())
        .then((data) => data.accessToken)

}

export async function getList() {
    const secret = urlCheck();
    return await fetch(`http://localhost:3000/overview`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "x-shared-shopper-secret": `${secret}`,
            "authorization": `${session.token}`
        }
    })
        .then((response) => response.json())
        .then((data) => data.shoppingLists)
}