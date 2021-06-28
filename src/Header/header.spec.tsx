import { render, screen } from "@testing-library/react"
import { Header } from "./header"
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

describe('Header', () => {
    it('should render its titleName', () => {
        const titleName = "Test"
        render(<TestEnvironment>
            <Header titleName={titleName} path="/signin" />
        </TestEnvironment>)         
      
        screen.getByText(titleName)
    })

    it('should render backbutton', () => {
        const testIdName = "BackButton"
        const path = "/signin"
        render(<TestEnvironment>
            <Header titleName="Test" path={path} />
        </TestEnvironment>)  

        screen.getByTestId(testIdName)
    })

    it('should render backbutton', () => {
        const testIdName = "BackButton"
        const path = "/signin"
        render(<TestEnvironment>
            <Header titleName="Test" path={path} />
        </TestEnvironment>)  
               
        const backButton = screen.getByTestId(testIdName)
        expect(backButton).toHaveAttribute("href", path)
    })
})