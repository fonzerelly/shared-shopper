import { urlCheck } from "../secret/secret"
import { session } from "./session"

let secret: string;

export function aquireToken(email: string, password: string) {
    secret= urlCheck();
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
    return await fetch(`http://localhost:3000/shoppinglist/${id}/${entryId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "x-shared-shopper-secret": `${secret}`,
            "authorization": `${session.token}`,
        }
    })
}

export async function editCount(count: string, id: string | null, entryId: number) {
    return await fetch(`http://localhost:3000/shoppinglist/${id}/${entryId}/count`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "x-shared-shopper-secret": `${secret}`,
            "authorization": `${session.token}`,
        },
        body: JSON.stringify({
            "newCount": `${count}`
        })
    })
}

export async function editMark(id: string | null, entryId: number) {
    return await fetch(`http://localhost:3000/shoppinglist/${id}/${entryId}/mark`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "x-shared-shopper-secret": `${secret}`,
            "authorization": `${session.token}`,
        }
    })
}

export async function changePositionUp(id: string | null, entryId: number) {
    return await fetch(`http://localhost:3000/shoppinglist/${id}/${entryId}/moveUp`, { 
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "x-shared-shopper-secret": `${secret}`,
            "authorization": `${session.token}`
        }
    })
}

export async function changePositionDown(id: string | null, entryId: number) {
    return await fetch(`http://localhost:3000/shoppinglist/${id}/${entryId}/moveDown`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "x-shared-shopper-secret": `${secret}`,
            "authorization": `${session.token}`,
        }
    })
}