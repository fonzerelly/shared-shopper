import List from "./List"
import {render, screen} from "@testing-library/react"
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
        //const listBody = screen.getAllByTestId("listBody")
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
})