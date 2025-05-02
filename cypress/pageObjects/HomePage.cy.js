class homePage{
    elements={
        logoutButton:()=>cy.get('.shop-menu > .nav > :nth-child(4) > a'),
        productsLink:()=>cy.get('.shop-menu > .nav > :nth-child(2)'),
        cartLink:()=>cy.get('.shop-menu > .nav > :nth-child(3) > a')

    }
    clickLogout(){
        this.elements.logoutButton().click()
    }
    clickProductLink(){
        this.elements.productsLink().click()
    }
}
export default homePage;