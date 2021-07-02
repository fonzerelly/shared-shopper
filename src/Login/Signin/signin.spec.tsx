import { render, screen, fireEvent, cleanup } from "@testing-library/react"
import { SignIn } from "./signin"
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

describe('SignIn', () => {
    beforeEach(() => {
        return render(
            <TestEnvironment>
                <SignIn />
            </TestEnvironment>
        )
    })
    it('should render logo', () => {
        const logo = screen.getByTestId("logoTest")
        expect(logo).toHaveClass("logoPlace")
    })
    it("should render input field", () => {
        screen.getAllByTestId('inputComp')
    })
    it("should render E-Mail field", () => {
        screen.getByPlaceholderText('E-Mail')
    })
    it("should render Passwort field", () => {
        screen.getByPlaceholderText('Passwort')
    })
    it('should render Login button', () => {
        const loginButton = screen.getByTestId("SecondaryButton")
        expect(loginButton).toHaveClass("SecondaryButton")
    })
    it('should render register button', () => {
        const registerButton = screen.getByTestId("PrimaryButton")
        expect(registerButton).toHaveClass("PrimaryButton")
    })
    it('should render register button', () => {
        const registerButtonLink = screen.getByTestId("registerButton")
        expect(registerButtonLink).toHaveAttribute("href", "/register")
    })
    it("should render ORSection text ODER", () => {
        screen.getByText("ODER")
    })
    it('should render line1', () => {
        const line1Test = screen.getByTestId("line1")
        expect(line1Test).toHaveClass("line")
    })
    it('should render line2', () => {
        const line2Test = screen.getByTestId("line2")
        expect(line2Test).toHaveClass("line")
    })
})