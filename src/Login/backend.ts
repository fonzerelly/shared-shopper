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

export async function getContent(id: string | null) {
    const secret = urlCheck();
    return await fetch(`http://localhost:3000/shoppinglist/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "x-shared-shopper-secret": `${secret}`,
            "authorization": `${session.token}`
        }
    })
    .then((response) => response.json())
}

export async function deleteList(id: number) {
    const secret = urlCheck();
    return await fetch(`http://localhost:3000/overview/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "x-shared-shopper-secret": `${secret}`,
            "authorization": `${session.token}`,
        }
    })
}

export async function addList(name: string) {
    const secret = urlCheck();
    return await fetch(`http://localhost:3000/overview/add`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "x-shared-shopper-secret": `${secret}`,
            "authorization": `${session.token}`,
        },
        body: JSON.stringify({
           "name": `${name}`
        })
    })  
}

export async function addContent(name: string, count: number, id: string | null) {
    const secret = urlCheck();
    return await fetch(`http://localhost:3000/shoppinglist/${id}/add`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "x-shared-shopper-secret": `${secret}`,
            "authorization": `${session.token}`,
        },
        body: JSON.stringify({
           "count": `${count}`,
           "label": `${name}`,
        })
    })
}

export async function deleteContent(id: string | null, entryId: number) {
    const secret = urlCheck();
    return await fetch(`http://localhost:3000/shoppinglist/${id}/${entryId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "x-shared-shopper-secret": `${secret}`,
            "authorization": `${session.token}`,
        }
    })
}

export async function editList(name: string, count: string, id: number, entryId: number) {
    const secret = urlCheck();
    return await fetch(`http://localhost:3000/shoppinglist/${id}/${entryId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "x-shared-shopper-secret": `${secret}`,
            "authorization": `${session.token}`,
        },
        body: JSON.stringify({
            "count": `${count}`,
            "label": `${name}`
        })
    })  
}