import { render, screen } from "@testing-library/react"
import { Header } from "./header"
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

function TestEnviorment (props: {children: any}) {
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
        render(<TestEnviorment>
            <Header titleName={titleName} path="/signin" />
        </TestEnviorment>)         
      
        screen.getByText(titleName)
    })

    it('should render backbutton', () => {
        const testIdName = "BackButton"
        const path = "/signin"
        render(<TestEnviorment>
            <Header titleName="Test" path={path} />
        </TestEnviorment>)  

        screen.getByTestId(testIdName)
    })

    it('should render backbutton', () => {
        const testIdName = "BackButton"
        const path = "/signin"
        render(<TestEnviorment>
            <Header titleName="Test" path={path} />
        </TestEnviorment>)  
               
        const backButton = screen.getByTestId(testIdName)
        expect(backButton).toHaveAttribute("href", path)
    })
})