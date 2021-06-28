import { render, screen, fireEvent } from "@testing-library/react"
import { ProductChange } from "./ProductChange"
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

describe('ProductChange', () => {
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
    }

    ]

    beforeEach(() => {
        render(<TestEnvironment>
            <ProductChange name="test" amount={1} delete={() => { }} productId={0} position={0} listId="0" setter={() => { }} onMove={() => { }} listContent={listContent} />
            <ProductChange name="test2" amount={1} delete={() => { }} productId={1} position={1} listId="1" setter={() => { }} onMove={() => { }} listContent={listContent} />
            <ProductChange name="test3" amount={1} delete={() => { }} productId={2} position={2} listId="2" setter={() => { }} onMove={() => { }} listContent={listContent} />
        </TestEnvironment>)
    });

    it('should render its static Product-container', () => {
        screen.getAllByTestId('product--static')
    })

    it('should render text-container', () => {
        screen.getAllByTestId('text-container')
    })

    it('should render PencilIcon', () => {
        screen.getAllByTestId('Pencil1')
    })
    it('should render count', () => {
        screen.getAllByText("1" + "x")
    })

    it('should render inactive up button', () => {
        screen.getByRole('button', { name: 'upInactive.svg' })
    })

    it('should render active up button', () => {
        screen.getAllByRole('button', { name: 'up.svg' })
    })

    it('should render active down button', () => {
        screen.getAllByRole('button', { name: 'down.svg' })
    })

    it('should render inactive down button', () => {
        screen.getByRole('button', { name: 'downInactive.svg' })
    })

    it('should render editable product', async () => {
        const editPen = screen.getAllByTestId("Pencil1")
        await fireEvent.click(editPen[0])
        screen.getByTestId('product--editable')
    })

    it('should render its text-container', async () => {
        const editPen = screen.getAllByTestId("Pencil1")
        await fireEvent.click(editPen[0])
        screen.getByTestId('text-container2')
    })

    it('should change product--editable to product static', async () => {
        const editPen = screen.getAllByTestId("Pencil1")
        await fireEvent.click(editPen[0])
        const closeEditPen = screen.getAllByTestId("Pencil1")
        await fireEvent.click(closeEditPen[0])
        screen.getByTestId('product--static')
    })

    it('should erase product', async () => {
        const editPen = screen.getAllByTestId("Pencil1")
        await fireEvent.click(editPen[0])
        const trash = screen.getAllByTestId("trash")
        await fireEvent.click(trash[0])

        const remainingProduct = screen.getAllByTestId("product--static")

        var count = Object.keys(remainingProduct).length
        expect(count).toBe(2)
    })

    it('should render count input ', async () => {
        const editPen = screen.getAllByTestId("Pencil1")
        await fireEvent.click(editPen[0])
        screen.getByPlaceholderText("1")
    })

    it('should render text input ', async () => {
        const editPen = screen.getAllByTestId("Pencil1")
        await fireEvent.click(editPen[0])
        screen.getByPlaceholderText("test")
    })
})