describe('check box', () => {
    it('test radio button ', () => {
        cy.visit('https://material.playwrightvn.com/01-xpath-register-page.html')
        cy.get('input#male').should('be.visible').and('not.be.checked')
        cy.get('input#male').check().should('be.checked')
        cy.get('input#reading').should('be.visible').and('not.be.checked')
        cy.get('input#reading').check().should('be.checked')
        cy.get('input#reading').uncheck().should('not.be.checked')
        cy.xpath("//input[@name='hobbies']").check().should('be.checked')
        cy.xpath("//input[@name='hobbies']").uncheck().should('not.be.checked')

    })
})