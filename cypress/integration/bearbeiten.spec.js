describe("/list/shoppinglist/bearbeiten",() => {
    it("should allow bearbeiten", () => {
        cy.visit("http://localhost:3000/list/shoppinglist/bearbeiten")
        cy.get(".pencil").first().click()
        cy.get(".pencil--2").should("be.visible")
    })
})