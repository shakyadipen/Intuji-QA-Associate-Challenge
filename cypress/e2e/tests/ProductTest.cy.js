import homePage from "../../pageObjects/HomePage.cy";
import productPage from "../../pageObjects/ProductPage.cy";

describe("User should navigate to the product page and verify the product details",()=>{
    beforeEach(function(){
        cy.visit("https://automationexercise.com/login");
    }) 

it('Should Navigate Product  and Verify Details',()=>{
    const homeObj=new homePage()
    const productObj=new productPage()
    //Navigate to the Product link
    homeObj.clickProductLink()
    //Assertion to verify you reached the right URL
    cy.url().should('eq',"https://automationexercise.com/products")

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