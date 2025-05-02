class signupPage{
    elements={
        titleInput:()=>cy.get('#id_gender1'),
        passwordInput:()=>cy.get('#password'),
        dayInput:()=>cy.get('#days'),
        monthInput:()=>cy.get('#months'),
        yearInput:()=>cy.get('[data-qa="years"]'),

        firstNameInput:()=>cy.get('[data-qa="first_name"]'),
        lastNameInput:()=>cy.get('[data-qa="last_name"]'),
        addressInput:()=>cy.get('#address1'),
        countryInput:()=>cy.get('#country'),
        stateInput:()=>cy.get('#state'),
        cityInput:()=>cy.get('#city'),
        zipcodeInput:()=>cy.get('#zipcode'),
        mobileNumberInput:()=>cy.get('#mobile_number'),
        createButton:()=>cy.get('[data-qa="create-account"]'),

        //For successfully Regsitration Verification
        successMessage:()=>cy.get('[data-qa="account-created"]>b'),
        clickOnContinue:()=>cy.get('[data-qa="continue-button"]')





    }
    // fillRegistrationForm(fname,lname,pwd,day,month,year,address,cname,state,city,zcode,mobNumber){
    //     this.elements.titleInput().click();
    //     this.elements.passwordInput().type(pwd);
    //     this.elements.dayInput().select(day);
    //     this.elements.monthInput().select(month);
    //     this.elements.yearInput().select(year);
    //     this.elements.firstNameInput().type(fname);
    //     this.elements.lastNameInput().type(lname);
    //     this.elements.addressInput().type(address);
    //     this.elements.stateInput().type(state);
    //     this.elements.countryInput().select(cname);
    //     this.elements.cityInput().type(city);
    //     this.elements.zipcodeInput().type(zcode);
    //     this.elements.mobileNumberInput().type(mobNumber);
    // }
    fillRegistrationForm(data){
        this.elements.titleInput().click();
        this.elements.passwordInput().type(data.password);
        this.elements.dayInput().select(data.day);
        this.elements.monthInput().select(data.month);
        this.elements.yearInput().select(data.year);
        this.elements.firstNameInput().type(data.firstName);
        this.elements.lastNameInput().type(data.lastName);
        this.elements.addressInput().type(data.address);
        this.elements.stateInput().type(data.state);
        this.elements.countryInput().select(data.country);
        this.elements.cityInput().type(data.city);
        this.elements.zipcodeInput().type(data.zipCode);
        this.elements.mobileNumberInput().type(data.mobileNumber);
    }
    // selectTitle(){
    //     this.elements.titleInput().click();
    // }
    // enterPassword(pwd){
    //     this.elements.passwordInput().type(pwd);

    // }
    // setDay(day){
    //     this.elements.dayInput().select(day);
    // }
    // setMonth(month){
    //     this.elements.monthInput().select(month);
    // }
    // setYear(year){
    //     this.elements.yearInput().select(year);
    // }
    // setFirstName(fname){
    //     this.elements.firstNameInput().type(fname);
    // }
    // setLastName(lname){
    //     this.elements.lastNameInput().type(lname);
    // }
    // setAddress(address){
    //     this.elements.addressInput().type(address);
    // }
    // setCountry(cname){
    //     this.elements.countryInput().select(cname);
    // }
    // setState(state){
    //     this.elements.stateInput().type(state);
    // }
    // setCity(city){
    //     this.elements.cityInput().type(city);
    // }
    // setZipCode(zcode){
    //     this.elements.zipcodeInput().type(zcode);
    // }
    // setMobileNumber(mobNumber){
    //     this.elements.mobileNumberInput().type(mobNumber);
    // }
    clickCreatebutton(){
        this.elements.createButton().click()
    }
    getSuccessMessage(){
        return this.elements.successMessage()
    }
    clickContinueBtn(){
        this.elements.clickOnContinue().click()
    }

}
export default signupPage;