import React from 'react';
import { ReactComponent as UpIcon } from '../../img/up.svg'
import { ReactComponent as DownIcon } from '../../img/down.svg'
import { ReactComponent as UpIconInactive } from '../../img/upInactive.svg'
import { ReactComponent as DownIconInactive } from '../../img/downInactive.svg'
import { changePositionUp, changePositionDown} from '../../Login/backend'
import './UpDownButton.css'
import {useToken} from '../../useToken/useToken'
import { useSecret} from '../../secret/secret';

export function UpDownButtons(props: {listId: string | null, productId: number, position: number, onMove: Function, list: any}) {

    let buttonUp = <UpIcon />
    let buttonDown = <DownIcon />

    const { token } = useToken();
    const {secret} = useSecret()
    

   async function onClickUp() {
        await changePositionUp(props.listId, props.productId, token, secret)
        props.onMove()
    }
 
    async function onClickDown() {
     await changePositionDown(props.listId, props.productId, token, secret)
     props.onMove()
    }
 
    function checkButtonPositionUp() {
        if(props.position <= 0){
            buttonUp = <UpIconInactive />
            return true     
        }
        else{
            return false;
        }
    }
    function checkButtonPositionDown() {
        if(props.position === props.list.length-1){
            buttonDown =<DownIconInactive />
            return true
        }
        else{
            return false;
        }
    }

    return <div className="Up_Down">
        <button className="UpButton" onClick={() => {onClickUp()}} disabled={checkButtonPositionUp()} data-testid ="UpButton">{buttonUp}</button>
        <button className="DownButton" onClick={() => {onClickDown()}} disabled={checkButtonPositionDown()} data-testid ="DownButton">{buttonDown}</button>
    </div>

}
