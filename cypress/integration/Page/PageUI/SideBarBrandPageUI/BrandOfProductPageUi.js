export const brandOfProductPageUi = {
    elements: {
        poloLink: () => cy.xpath("//a[contains(@href, 'Polo')]"),
        hAndMLink: () => cy.xpath("//a[contains(@href, 'H&M')]"),
        madameLink: () => cy.xpath("//a[contains(@href, 'Madame')]"),
        mastAndHarbourLink: () => cy.xpath("//a[contains(@href, 'Mast & Harbour')]"),
        babyHugLink: () => cy.xpath("//a[contains(@href, 'Babyhug')]"),
        allenSollyJuniorLink: () => cy.xpath("//a[contains(@href, 'Allen Solly Junior')]"),
        kookieKidLink: () => cy.xpath("//a[contains(@href, 'Kookie Kids')]"),
        bibaLink: () => cy.xpath("//a[contains(@href, 'Biba')]"),

        // Dynamic method
        getBrandLink: (brandName) => cy.xpath(`//a[contains(@href, '${brandName}')]`)
    }
};