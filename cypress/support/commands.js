// ***********************************************

import loginPage from "../pageObjects/LoginPage.cy";
import productPage from "../pageObjects/ProductPage.cy";
Cypress.Commands.add('login', (email, password) => {
    const loginObj=new loginPage()
    loginObj.userLogin(email,password)

})

Cypress.Commands.add('AddToCart',(targetProductID)=>{
    const uniqueProductIds = new Set();
    //const targetProductID=['16','33'];
    const productObj=new productPage()

    productObj.provideAddToCartDetails().each(($el)=>{

        const productId = $el.attr('data-product-id');
        
                  
        if(targetProductID.includes(productId)&& !uniqueProductIds.has(productId)){
            uniqueProductIds.add(productId);
           
            cy.wrap($el).first().click({force:true})
            productObj.clickContinueLink()
        }
      
    })
})
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })