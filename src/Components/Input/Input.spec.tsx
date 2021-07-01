import { ListInput } from "./Input"
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

describe("ListInput", () => {

    it ("should render ListInput", () => {
        render (<TestEnvironment>
            <ListInput place = "test" setter = {() => {}}></ListInput>
            </TestEnvironment>)
            screen.getByPlaceholderText("test")
    })
})