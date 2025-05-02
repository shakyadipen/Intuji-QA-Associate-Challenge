class loginPage{
    elements={
        emailInput:()=> cy.get('[data-qa="login-email"]'),
        passwordInput:()=>cy.get('[data-qa="login-password"]'),
        loginButton:()=>cy.get('[data-qa="login-button"]'),

        logoutBtn:()=>cy.get('.shop-menu > .nav > :nth-child(4) > a'),
        errorMessage:()=>cy.get('.login-form> form> p')

    }
    userLogin(email,password){
        this.elements.emailInput().type(email)
        this.elements.passwordInput().type(password)
        this.elements.loginButton().click()

    }
    isLogoutElementVisible(){
        this.elements.logoutBtn().should('be.visible')
    }
    getErrorMessage(){
        return this.elements.errorMessage()
    }
}
export default loginPage;