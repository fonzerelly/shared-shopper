import { render, screen, fireEvent } from "@testing-library/react"
import { ShoppingList} from "./ShoppingList"
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

function TestEnvironment (props: {children: any}) {
    return <Router>
    <Switch>
        <Route>
            {props.children}
        </Route>
    </Switch>
    </Router>
}

describe('ShoppingList', () => {
    it('should render its tab-container', () => {
        render(<TestEnvironment>
            <ShoppingList  />
        </TestEnvironment>)         
        screen.getByTestId('tab')
    })

    it('should render bearbeiten button with link', () => {
        const testId = 'bearbeiten'
        render(<TestEnvironment>
            <ShoppingList  />
        </TestEnvironment>)         
        const bearbeitenButton = screen.getByTestId(testId)
        expect(bearbeitenButton).toHaveAttribute("href")
    })

    it('should render kaufen button with link', () => {
        const testId = 'kaufen'
        render(<TestEnvironment>
            <ShoppingList  />
        </TestEnvironment>)         
        const kaufenButton = screen.getByTestId(testId)
        expect(kaufenButton).toHaveAttribute("href")
    })

    it('should render bearbeitenButton and set the right class on click', async () => {
        render(<TestEnvironment>
            <ShoppingList  />
        </TestEnvironment>)         
        const bearbeitenButton = screen.getByRole("button", {name:"Bearbeiten"})
        await fireEvent.click(bearbeitenButton)
        expect(bearbeitenButton).toHaveClass("tabs active-tabs")
    })

    it('should render kaufenButton and set the right class on click', async () => {
        render(<TestEnvironment>
            <ShoppingList  />
        </TestEnvironment>)         
        const kaufenButton = screen.getByRole("button", {name:"Kaufen"})
        await fireEvent.click(kaufenButton)
        expect(kaufenButton).toHaveClass("tabs active-tabs")
    })

    it('should render content-tabs2', async () => {
        render(<TestEnvironment>
            <ShoppingList  />
        </TestEnvironment>) 
        const bearbeitenButton = screen.getByRole("button", {name:"Bearbeiten"})
        await fireEvent.click(bearbeitenButton)        
        screen.getByTestId('content-tabs2')
    })

    it('should render content-tabs', async () => {
        render(<TestEnvironment>
            <ShoppingList  />
        </TestEnvironment>) 
        const bearbeitenButton = screen.getByRole("button", {name:"Bearbeiten"})
        await fireEvent.click(bearbeitenButton)        
        screen.getByTestId('content-tabs')
    })

    it('should render ProductInit', async () => {
        render(<TestEnvironment>
            <ShoppingList  />
        </TestEnvironment>) 
        const bearbeitenButton = screen.getByRole("button", {name:"Bearbeiten"})
        await fireEvent.click(bearbeitenButton)        
        screen.getByTestId('Initial')
    })

    it('should render kaufen headline', async () => {
        render(<TestEnvironment>
            <ShoppingList  />
        </TestEnvironment>)         
        const kaufenButton = screen.getByRole("button", {name:"Kaufen"})
        await fireEvent.click(kaufenButton)
        screen.getByRole('heading', {name: 'Kaufen'})
    })

    it('should render Im Einkaufswagen headline', async () => {
        render(<TestEnvironment>
            <ShoppingList  />
        </TestEnvironment>)         
        const kaufenButton = screen.getByRole("button", {name:"Kaufen"})
        await fireEvent.click(kaufenButton)
        screen.getByRole('heading', {name: 'Im Einkaufswagen'})
    })
})