import checkoutPage from "../../pageObjects/CheckoutPage";
import homePage from "../../pageObjects/HomePage.cy";
import loginPage from "../../pageObjects/LoginPage.cy";
import navbar from "../../support/Navbar";

describe("User should checkout with proper credentials",()=>{
    beforeEach(function(){
        cy.visit("https://automationexercise.com/login");
        cy.fixture('testData').as('data'); 
        cy.fixture('checkoutData').as('cardData');
    })
    it("Should checkout",()=>{
        const loginObj=new loginPage()
        const homeObj=new homePage()
        const checkoutObj=new checkoutPage()
        const navbarObj=new navbar()

        if(loginObj.isLogoutElementVisible){
            homeObj.clickLogout()
            console.log("User Successfully logged out")
        }
        else{
            cy.get('@data').then(data=>{
                cy.login(data.email,data.password)
                console.log("User Successfully logged in")
            })
        }

        //Use fixture to use the data
        cy.get('@data').then(data=>{
            cy.login(data.email,data.password)

        })
        //Checkout
        navbarObj.clickCart()
        checkoutObj.clickOnCheckout()
        checkoutObj.clickPlaceOrderLink()
        cy.get('@cardData').then(data=>{
            checkoutObj.fillCardDetails(data)

        })
        checkoutObj.clickPayButton()
        checkoutObj.getSuccessMessage().should('be.visible').contains('Order Placed!')
        cy.log("Order Placed Successfully")
        checkoutObj.clickOnContinue()
       


    })
})