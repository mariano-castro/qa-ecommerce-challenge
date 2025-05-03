class CartPage {
    elements = {
        cartContent: () => cy.get('[data-testid="cart-page"]'),
        continuShoppingButton: () => cy.get('.cart-header > [data-testid="continue-shopping"]')
    }

    visitCart() {
        cy.visit('/cart');
    }

    verifyCartContent() {
        this.elements.cartContent().should('be.visible');
    }

    clickContinueShopping() {
        this.elements.continuShoppingButton().click();
    }
}

export default new CartPage();