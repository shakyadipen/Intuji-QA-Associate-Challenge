class checkoutPage{
    elements={
        checkoutLink:()=>cy.get('[class="btn btn-default check_out"]'),
        placeOrderLink:()=>cy.get('[href="/payment"]'),
        nameOnCardInput:()=>cy.get('[data-qa="name-on-card"]'),
        cardNumberInput:()=>cy.get('[data-qa="card-number"]'),
        cvcInput:()=>cy.get('[data-qa="cvc"]'),
        expiryMonthInput:()=>cy.get('[data-qa="expiry-month"]'),
        expiryYearInput:()=>cy.get('[data-qa="expiry-year"]'),
        payButtonLink:()=>cy.get('[data-qa="pay-button"]'),
        successMessage:()=>cy.get('[data-qa="order-placed"]'),
        continueButton:()=>cy.get('[data-qa="continue-button"]')

    }
    clickOnCheckout(){
        this.elements.checkoutLink().click()
    }
    clickPlaceOrderLink(){
        this.elements.placeOrderLink().click()
    }
    fillCardDetails(data){
        this.elements.nameOnCardInput().type(data.cardName)
        this.elements.cardNumberInput().type(data.cardNumber)
        this.elements.cvcInput().type(data.cvc)
        this.elements.expiryMonthInput().type(data.expiryMonth)
        this.elements.expiryYearInput().type(data.expiryYear)
    }
clickPayButton(){
    this.elements.payButtonLink().click()
}
getSuccessMessage(){
    return this.elements.successMessage()
}
clickOnContinue(){
    this.elements.continueButton().click()
}


}
export default checkoutPage;