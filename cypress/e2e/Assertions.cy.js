describe('Assertion', () => {
    it('implicit assser', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.url().should('include', 'orangehrmlive.com')
            .and('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
            .and('contain', 'orangehrmlive')

        cy.title().should('include', 'HRM').and('eq', 'OrangeHRM')
        cy.get('.orangehrm-login-branding > img').should('be.visible').and('exist')

        cy.xpath('//a').should('have.length', 5)

        cy.get("input[placeholder='Username']").type("Admin")
        cy.get("input[placeholder='Username']").should('have.value', 'Admin')
    })
})