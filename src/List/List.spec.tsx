import List from "./List"
import {render, screen, fireEvent} from "@testing-library/react"
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from 'react-router-dom';

function TestEnvironment(props:{children: any}){
    return <Router>
    <Switch>
        <Route>
            {props.children}
        </Route>
    </Switch>
    </Router>
}


describe("List", () => {

    it("should render listBody", () => {
        render(<TestEnvironment>
        <List></List>
        </TestEnvironment>)
        screen.getByTestId("listBody")
    })

    it("should render Add", () => {
        render(<TestEnvironment>
        <List></List>
        </TestEnvironment>)
        screen.getByTestId("Add")
    })

    it("should render ListButton", () => {
        const testIdName = "listButton"
        render(<TestEnvironment>
        <List></List>
        </TestEnvironment>)
        screen.getByTestId(testIdName)
    })

    it("should render ListContainer", () => {
        render(<TestEnvironment>
            <List></List>
            </TestEnvironment>)
            screen.getByTestId("ListContainer")
    })

    it("should render ButtonLink", () => {
        render(<TestEnvironment>
            <List></List>
            </TestEnvironment>)
            const ButtonLink = screen.getByTestId("ButtonLink")
            expect(ButtonLink).toHaveAttribute("href")
    })

    xit("should render ButtonLink", async () => {
        render(<TestEnvironment>
            <List></List>
            </TestEnvironment>)
            const listButton = screen.getByRole("button", {name: "+"})
            await fireEvent.click(listButton)
            const container = screen.getByTestId("testContainer")
            var count = Object.keys(container).length
            expect(count).toBe(2)
    })
})