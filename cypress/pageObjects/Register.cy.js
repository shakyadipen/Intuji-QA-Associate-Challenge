class registerPage{
    elements={
        nameInput:()=> cy.get('[data-qa="signup-name"]'),
        emailInput:()=>cy.get('[data-qa="signup-email"]'),
        signupButton:()=>cy.get('[data-qa="signup-button"]'),

        //If the email is already used
        errorMessage:()=>cy.get('.signup-form > form > p')

    }
    enterName(userName){
        this.elements.nameInput().clear();
        this.elements.nameInput().type(userName);

    }
    enterEmail(email){
        this.elements.emailInput().clear();
        this.elements.emailInput().type(email);
    }
    clickSignup(){
        this.elements.signupButton().click();
    }
    getErrorMessage(){
        return this.elements.errorMessage()
    }

}
export default registerPage;
