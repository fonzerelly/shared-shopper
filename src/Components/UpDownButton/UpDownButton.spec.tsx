import { render, screen, fireEvent } from "@testing-library/react"
import { UpDownButtons } from "./UpDownButton"
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

const listContent = [{
    id: 0,
    label: 'test',
    count: 1,
    position: 0,
    marked: false
},
{
    id: 1,
    label: 'test2',
    count: 1,
    position: 1,
    marked: false
},
{
    id: 2,
    label: 'test3',
    count: 1,
    position: 2,
    marked: false
}]

function TestEnvironment(props: { children: any }) {
    return <Router>
        <Switch>
            <Route>
                {props.children}
            </Route>
        </Switch>
    </Router>
}

describe('UpDownButtons', ()=> {
    it('should render inactive UpButton', () => {
        render(<TestEnvironment>
            <UpDownButtons listId="0" productId={0} position={0} onMove={()=>{}} list= {listContent}></UpDownButtons>
            <UpDownButtons listId="0" productId={1} position={1} onMove={()=>{}} list= {listContent}></UpDownButtons>
            <UpDownButtons listId="0" productId={2} position={2} onMove={()=>{}} list= {listContent}></UpDownButtons> 
         </TestEnvironment>)
        screen.getByRole('button', {name: 'upInactive.svg'})
    })
    it('should render inactive UpButton and it should be disabled', () => {
        render(<TestEnvironment>
            <UpDownButtons listId="0" productId={0} position={0} onMove={()=>{}} list= {listContent}></UpDownButtons>
            <UpDownButtons listId="0" productId={1} position={1} onMove={()=>{}} list= {listContent}></UpDownButtons>
            <UpDownButtons listId="0" productId={2} position={2} onMove={()=>{}} list= {listContent}></UpDownButtons> 
         </TestEnvironment>)
        const upButton = screen.getAllByTestId("UpButton")
        const upInactive = upButton[0]
        expect(upInactive).toHaveAttribute('disabled')
    })

    it('should render inactive DownButton', () => {
        render(<TestEnvironment>
            <UpDownButtons listId="0" productId={0} position={0} onMove={()=>{}} list= {listContent}></UpDownButtons>
            <UpDownButtons listId="0" productId={1} position={1} onMove={()=>{}} list= {listContent}></UpDownButtons>
            <UpDownButtons listId="0" productId={2} position={2} onMove={()=>{}} list= {listContent}></UpDownButtons> 
         </TestEnvironment>)
        screen.getByRole('button', {name: 'downInactive.svg'})
    })

    it('should render inactive DownButton and it should be disabled', () => {
        render(<TestEnvironment>
            <UpDownButtons listId="0" productId={0} position={0} onMove={()=>{}} list= {listContent}></UpDownButtons>
            <UpDownButtons listId="0" productId={1} position={1} onMove={()=>{}} list= {listContent}></UpDownButtons>
            <UpDownButtons listId="0" productId={2} position={2} onMove={()=>{}} list= {listContent}></UpDownButtons> 
         </TestEnvironment>)
        const downButton = screen.getAllByTestId("DownButton")
        const downInactive = downButton[2]
        expect(downInactive).toHaveAttribute('disabled')
    })
})