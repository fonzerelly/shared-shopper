import { getList } from '../Login/backend'

export const session:{token?:string, url:string}={
    token: "0",
    url: "/list"
}

export function initialList() {
    return [{
        id: 0,
        name: '',
        content: [{
            id: 0,
            label: '',
            count: 0,
            position: 0,
            marked: false
        }]
    }]
}

export function initialContent() {
    return [{
        id: 0,
        label: '',
        count: 0,
        position: 0,
        marked: false
    }]
}

export async function fetchedList(token: string | null) {
    return await getList(token)
}

export function checkListId(pathURL: string) {
    const urlParams = new URLSearchParams(pathURL)
    const path = urlParams.get('id')
    return path === null ? "" : path
}

export function findListId () {
    const pathURL = window.location.search
    const path = checkListId(pathURL)
    return path
}
