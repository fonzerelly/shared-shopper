import { render, screen, cleanup } from "@testing-library/react"
import userEvent from '@testing-library/user-event'
import { ProductBuy } from "./ProductBuy"
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

    beforeEach(() => {
        render(<TestEnvironment>
            <ProductBuy name="test" amount={1} state={false} productId={0} listId="0" markFn={() => { }} />
            <ProductBuy name="test2" amount={3} state={true} productId={0} listId="1" markFn={() => { }} />
        </TestEnvironment>)
    });

    it('should render an unchecked product', () => {
        screen.getByTestId('product--unchecked')
    })

    it('should render an checked product', () => {
        screen.getByTestId('product--checked')
    })

    it('should render text-divs', () => {
        screen.getAllByTestId('text')
    })

    it('should render amount', () => {
        screen.getAllByText("1" + "x")
    })

    it('should render name of item', () => {
        screen.getByText("test")
    })

    it('should render Checkbox', () => {
        screen.getByTestId("CheckBox")
        console.log(screen.getByTestId("CheckBox"))
    })

    it('should render text-divs', async () => {
        cleanup()
        const {rerender} = render(<TestEnvironment>
            <ProductBuy name="test" amount={1} state={false} productId={0} listId="0" markFn={() => { }} />
        </TestEnvironment>)
        const checkBox = screen.getByTestId("CheckBox")
        await userEvent.click(checkBox)
        rerender(<TestEnvironment>
            <ProductBuy name="test" amount={1} state={true} productId={0} listId="0" markFn={() => { }} />
        </TestEnvironment>)
        screen.getByTestId('product--checked')
    })
})