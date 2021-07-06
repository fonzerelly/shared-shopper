import { getList } from '../Login/backend'


export  const session:{token?:string, url:string}={
    token: "",
    url: "/list"
}

export interface OrderListItem {
    id: number,
    name: string,
    content: {
        id: number,
        label: string,
        count: number,
        position: number,
        marked: boolean
    }[]
}

export function initialList():OrderListItem[] {
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

export async function fetchedList() {
    return await getList()
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
