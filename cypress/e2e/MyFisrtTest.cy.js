describe('suit name', () => {

    it('open and veryfy title', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.title().should('eq', 'OrangeHRM')

    })

    it('CSS locator', () => {
        cy.visit('https://automationexercise.com/')
        cy.xpath("//div[@class='col-sm-4']").should('have.length', 41)




    })

    it('test name 3', () => {


    })

})