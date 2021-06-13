import { getList } from '../Login/backend'
import { useEffect } from 'react';

export  const session:{token?:string}={}

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

export async function fetchedList() {
    return getList()
}

export function getContent(listId: number) {

}