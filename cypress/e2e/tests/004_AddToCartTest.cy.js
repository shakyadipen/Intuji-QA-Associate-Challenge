import cartPage from "../../pageObjects/CartPage";
import homePage from "../../pageObjects/HomePage.cy";
import loginPage from "../../pageObjects/LoginPage.cy";
import productPage from "../../pageObjects/ProductPage.cy";
import navbar from "../../support/Navbar";

describe("Add to Cart and Quantity Management",()=>{
    //To access the object in each tests
    const navbarObj=new navbar()
    const productObj=new productPage()
    const cartObj=new cartPage()
    beforeEach(function(){
        cy.visit("https://automationexercise.com/login");
        cy.fixture('testData').as('data'); 
        
    })
    it("Should handle multiple items to cart",()=>{
        const homeObj=new homePage()
        const loginObj=new loginPage()
        const uniqueProductIds = new Set();
        const targetProductID=['16','33'];
        //handle if already logged in,first logout then login
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
            console.log("User Successfully logged in")
        })
       
        //Click on Products link
        homeObj.clickProductLink()
        cy.url().should('eq',"https://automationexercise.com/products")
        //Get the details of each and every cart
        productObj.provideAddToCartDetails().each(($el)=>{

            const productId = $el.attr('data-product-id');
                      
            if(targetProductID.includes(productId)&& !uniqueProductIds.has(productId)){
                uniqueProductIds.add(productId);
               
                cy.wrap($el).first().click({force:true})
                productObj.clickContinueLink()
            }
          
        })
    })
        it("Should Change the quantity of the product in cart ",()=>{
            //Click on Cart Link
            navbarObj.clickCart()
            cy.log("Click on the Cart from Navbar")
            cartObj.clickFirstProduct()
            cy.log("Click on the first Product in the cart")
            cartObj.changeQuantity("3")
            cy.log("Change the quantity of items")
            cartObj.clickAddToCart()
            cy.log("Clicked on Add to Cart Button")

            cartObj.clickViewCart()
            cy.log("Clicked on ViewCart Link")
            cartObj.verifyQuantity().should('be.visible').contains('4')
            //Before Removing verify the items in the cart
            cartObj.verifyCartItems().should('have.length',"2")
            cartObj.clickRemoveBtn()
            //After  Removing verify the items in the cart
            cartObj.verifyCartItems().should('have.length',"1")
            cy.log("The Cart Items is verified after removing the item")


       })  
       
        
    })