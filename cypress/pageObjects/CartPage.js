class cartPage{
    elements={
        cartDescriptionLink:()=>cy.get('a[href="/product_details/16"]'),
        quantityLink:()=>cy.get('#quantity'),
        addToCartBtn:()=>cy.get('[class="btn btn-default cart"]'),
        viewCartLink:()=>cy.get('u'),
        changeQuantityLink:()=>cy.get('#product-16 > .cart_quantity > .disabled'),
        removeProdLink:()=>cy.get('#product-33 > .cart_delete > .cart_quantity_delete'),
        cartItemsLink:()=>cy.get('[class="cart_description"]')


    }
    clickFirstProduct(){
        this.elements.cartDescriptionLink().click()
    }
    changeQuantity(numb){
        this.elements.quantityLink().clear()
        this.elements.quantityLink().type(numb)
    }
    clickAddToCart(){
        this.elements.addToCartBtn().click()
    }
    clickViewCart(){
        this.elements.viewCartLink().click()

    }
    verifyQuantity(){
        return this.elements.changeQuantityLink()
    }
    clickRemoveBtn(){
        this.elements.removeProdLink().click()
    }
    verifyCartItems(){
        return this.elements.cartItemsLink()
    }

}
export default cartPage;