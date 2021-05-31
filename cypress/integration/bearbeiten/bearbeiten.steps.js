import {Given, When, Then} from "cypress-cucumber-preprocessor"
Given("der Benutzer ist auf der Seite /list/shoppinglist/bearbeiten", () => {
    cy.visit("http://localhost:3000/list/shoppinglist/bearbeiten")
})
When("der Benutzer auf den Stift clickt", () => {
    cy.get(".pencil").first().click()
})
Then("wird ein anderer Stift angezeigt", () => {
    cy.get(".pencil--2").should("be.visible")
})