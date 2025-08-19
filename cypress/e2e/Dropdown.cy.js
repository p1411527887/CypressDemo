describe('dropDown', () => {
    it.skip('default dropdown ', () => {
        cy.visit('https://www.zoho.com/commerce/free-demo.html')
        cy.get('#zcf_address_country').select('Italy').should('have.value', 'Italy')
    })




    it('should select Delhi University from suggestions', () => {
        cy.visit("https://www.wikipedia.org/")
        cy.get('#searchInput').type('Delhi')
        cy.get('.suggestion-title').contains('Delhi University').click()


    })

    it('chọn đúng Delhi University trong danh sách gợi ý', () => {
        cy.visit("https://www.wikipedia.org/")

            // Gõ "Delhi" vào ô search
        cy.get('#searchInput').type('Delhi')

            // Duyệt qua từng suggestion
        cy.get('.suggestion-title').each(($el) => {
                // $el là 1 <li> suggestion
            if ($el.text().includes('Delhi University')) {
                    // wrap lại $el để Cypress hiểu
                cy.wrap($el).click()
                }
            })

        })


})