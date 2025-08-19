describe('Alert', () => {
    it.skip('JS alert', () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsAlert()']").click();
        cy.get("#result").should('have.text','You successfully clicked an alert');
    })

    it('JS confirm alert', () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsConfirm()']").click();
        cy.on('window:confirm', (text) => {
            expect(text).to.contain('I am a JS Confirm');
        })
        cy.get("#result").should('have.text','You clicked: Ok')

    })
})