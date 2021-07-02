import { render, screen, fireEvent, cleanup } from "@testing-library/react"
import { Register } from "./register"
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
                <Register />
            </TestEnvironment>
        )
    })
    it("should contain text Registrierung", () => {
        screen.getByText("Registrierung")
    })
    it('should render register button', () => {
        const registerbody = screen.getByTestId("body")
        expect(registerbody).toHaveClass("registerbody")
    })
    it("should contain text Einfach, aktuell und intuitiv", () => {
        screen.getByText("Einfach, aktuell und intuitiv.")
    })
    it("should render input field", () => {
        screen.getAllByTestId('inputComp')
    })
    it("should render E-Mail field", () => {
        screen.getByPlaceholderText('E-Mail')
    })
    it('should render error', async () => {
        const registerButton = screen.getByRole("button", { name: "Jetzt zusammen einkaufen!" })
        await fireEvent.click(registerButton)
        screen.getByTestId('pwerror')
    })
    it('should render error', async () => {
        const registerButton = screen.getByRole("button", { name: "Jetzt zusammen einkaufen!" })
        await fireEvent.click(registerButton)
        screen.getByTestId('emerror')
    })
    it('should render register button', () => {
        const registerButton = screen.getByTestId("PrimaryButton")
        expect(registerButton).toHaveClass("PrimaryButton")
    })
    it('should redirect to /list', () => {
        const registerButtonLink = screen.getByTestId("link")
        expect(registerButtonLink).toHaveAttribute("href", "/list")
    })
})
