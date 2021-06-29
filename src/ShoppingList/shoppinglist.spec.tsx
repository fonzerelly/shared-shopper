import { render, screen, fireEvent, cleanup } from "@testing-library/react"
import { ShoppingList } from "./ShoppingList"
import { findListId } from '../Login/session';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

function TestEnvironment(props: { children: any }) {
    return <Router>
        <Switch>
            <Route>
                {props.children}
            </Route>
        </Switch>
    </Router>
}

describe('ShoppingList', () => {
    beforeEach(() => {
        window = Object.create(window);
        const url = "?id=0";
        Object.defineProperty(window, 'location', {
            value: {
                search: url
            },
            writable: true
        });

        return render(<TestEnvironment>
            <ShoppingList />
        </TestEnvironment>)
    })

    it('should render its tab-container', () => {
        screen.getByTestId('tab')
    })

    it('should render bearbeiten button with link', () => {
        const testId = 'bearbeiten'
        const currentListId = findListId();
        const path = `/list/shoppinglist/bearbeiten/?id=${currentListId}`

        const bearbeitenButton = screen.getByTestId(testId)
        expect(bearbeitenButton).toHaveAttribute("href", path)
    })

    it('should render kaufen button with link', () => {
        const testId = 'kaufen'
        const currentListId = findListId();
        const path = `/list/shoppinglist/kaufen/?id=${currentListId}`

        const kaufenButton = screen.getByTestId(testId)
        expect(kaufenButton).toHaveAttribute("href", path)
    })

    it('should render bearbeitenButton and set the right class on click', async () => {

        const kaufenButton = screen.getByRole("button", { name: "Kaufen" })
        await fireEvent.click(kaufenButton)
        const bearbeitenButton = screen.getByRole("button", { name: "Bearbeiten" })
        await fireEvent.click(bearbeitenButton)
        expect(bearbeitenButton).toHaveClass("active-tabs")
    })

    it('should render kaufenButton and set the right class on click', async () => {
        const bearbeitenButton = screen.getByRole("button", { name: "Bearbeiten" })
        const kaufenButton = screen.getByRole("button", { name: "Kaufen" })
        await fireEvent.click(kaufenButton)
        expect(kaufenButton).toHaveClass("active-tabs")
        expect(bearbeitenButton).not.toHaveClass("active-tabs")
    })

    it('should render content-tabs2', async () => {
        const bearbeitenButton = screen.getByRole("button", { name: "Bearbeiten" })
        await fireEvent.click(bearbeitenButton)
        screen.getByTestId('content-tabs2')
    })

    it('should render content-tabs', async () => {
        const bearbeitenButton = screen.getByRole("button", { name: "Bearbeiten" })
        await fireEvent.click(bearbeitenButton)
        screen.getByTestId('content-tabs')
    })

    it('should render ProductInit', async () => {
        const bearbeitenButton = screen.getByRole("button", { name: "Bearbeiten" })
        await fireEvent.click(bearbeitenButton)
        screen.getByTestId('Initial')
    })

    it('should render kaufen headline', async () => {
        const kaufenButton = screen.getByRole("button", { name: "Kaufen" })
        await fireEvent.click(kaufenButton)
        screen.getByRole('heading', { name: 'Kaufen' })
    })

    it('should render Im Einkaufswagen headline', async () => {
        const kaufenButton = screen.getByRole("button", { name: "Kaufen" })
        await fireEvent.click(kaufenButton)
        screen.getByRole('heading', { name: 'Im Einkaufswagen' })
    })
})