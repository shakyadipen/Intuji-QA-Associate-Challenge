
class productPage{
    elements={
        //main Category link
        categoryWomenLink:()=>cy.get('[href="#Women"]'),
        categoryMenLink:()=>cy.get('[href="#Men"]'),
        categoryKidsLink:()=>cy.get('[href="#Kids"]'),
        //SubCategory link
        subCategoryWomenDressLink:()=>cy.get('[href="/category_products/1"]'),
        subCategoryMenJeansLink:()=>cy.get('[href="/category_products/6"]'),
        subCategoryKidsDressLink:()=>cy.get('[href="/category_products/4"]'),
        categoryTitleLink:()=>cy.get('[class="title text-center"]'),
        //Product details link
        viewProductLink:()=>cy.get('[href="/product_details/3"]'),
        productNameLink:()=>cy.get('.product-information > h2'),
        productPriceLink:()=>cy.get(':nth-child(5) > span'),
        productAvailabilityLink:()=>cy.get('.product-information > :nth-child(6)'),
        //Add to cart for women>dress,MEn>jeans, kids>Dress
        
        womenDressAddToCartLink:()=>cy.get('.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn'),
        contineShoppingLink:()=>cy.get('[class="btn btn-success close-modal btn-block"]'),
        menJeansAddToCartLink:()=>cy.get('[data-product-id="33"'),
        kidsDressAddToCartLink:()=>cy.get('[data-product-id="16"'),
        //All add to card links
        productAddToCardLinks:()=>cy.get('[class="btn btn-default add-to-cart"]')
       // productAddToCardLinks:()=>cy.get('a[data-product-id="${id}"]')




    }
    clickCategoryWomen(){
        this.elements.categoryWomenLink().click()
    }
    clickCategoryDress(){
        this.elements.subCategoryWomenDressLink().click()
    }
    clickProductDetails(){
        this.elements.viewProductLink().click()
    }
    verifyProductCategoryTitle(){
        return this.elements.categoryTitleLink()
    }
    verifyproductName(){
        return this.elements.productNameLink()
    }
    verifyProductPrice(){
        return this.elements.productPriceLink()
    }
    verifyProductAvailability(){
        return this.elements.productAvailabilityLink()
    }
    provideAddToCartDetails(){
       return this.elements.productAddToCardLinks()
    }
    clickContinueLink(){
        this.elements.contineShoppingLink().click()
    }
    

}
export default productPage;