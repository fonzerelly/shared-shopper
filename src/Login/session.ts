import { getList } from '../Login/backend'


export const session: { token?: string } = {}



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

export async function fetchedList() {
    return await getList()
}

export function checkListId() {
    const path = window.location.search
    const urlParams = new URLSearchParams(path)
    const pathUrl = urlParams.get('id')
    return pathUrl      
}