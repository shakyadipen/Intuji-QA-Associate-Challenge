import homePage from "../../pageObjects/HomePage.cy";
import loginPage from "../../pageObjects/LoginPage.cy";
import productPage from "../../pageObjects/ProductPage.cy";
import navbar from "../../support/Navbar";

describe("User should navigate to the product page and verify the product details",()=>{
    const loginObj=new loginPage()
    const homeObj=new homePage()
    const productObj=new productPage()
    const navbarObj=new navbar()
    
    beforeEach(function(){
        cy.visit("https://automationexercise.com/login");
        cy.fixture('testData').as('data'); 
    }) 

it('Should Navigate Product  and Verify Details',()=>{
      //Login
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
    cy.get('@data').then(data=>{
        cy.login(data.email,data.password)

    })
        //Navigate to the Product link
        navbarObj.clickProducts()
        cy.url().should('eq',"https://automationexercise.com/products")

    //Use fixture to use the data
    
    //Assertion to verify you reached the right URL
    
    cy.log("User Successfully Navigated to Products Page")

    //Click on Women>Dress
    productObj.clickCategoryWomen()
    productObj.clickCategoryDress()
    //Verify that the keyword women is present
    productObj.verifyProductCategoryTitle().contains("Women")
    //Click on the product details link
    productObj.clickProductDetails()
    //Verify the prduct details
    productObj.verifyproductName().should('be.visible').contains('Sleeveless ')
    productObj.verifyProductPrice().should('be.visible').contains("Rs. 1000")
    productObj.verifyProductAvailability().should('be.visible').contains(" In Stock")

})
})