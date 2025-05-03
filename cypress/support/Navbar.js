class navbar{
    elements={
        homeLink:()=>cy.get('.shop-menu > .nav > :nth-child(1) > a'),
        productLink:()=>cy.get('.shop-menu > .nav > :nth-child(2) > a'),
        cartLink:()=>cy.get('.shop-menu > .nav > :nth-child(3) > a'),
        logoutLink:()=>cy.get('.shop-menu > .nav > :nth-child(4) > a'),
        deleteLink:()=>cy.get('.shop-menu > .nav > :nth-child(5) > a'),
        userDetailsLink:()=>cy.get(':nth-child(10) > a')

    }
    clickHome(){
        this.elements.homeLink().click()
    }
    clickProducts(){
        this.elements.productLink().click()
    }
    clickCart(){
        this.elements.cartLink().click()
    }
    clickLogout(){
        this.elements.logoutLink().click()
    }
    getUserDetails(){
        return this.elements.userDetailsLink().get('text')
    }

}
export default navbar;