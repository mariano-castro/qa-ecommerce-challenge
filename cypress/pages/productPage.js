class ProductPage {
    elements = {
        productContent: () => cy.get('.product-detail-container'),
        goBackButton: () => cy.get('[data-testid="back-to-products"]'),
        addToCartButton: () => cy.get('[data-testid="add-to-cart"]')
    }

    visitProductPage1() {
        cy.visit('/product/1');
    }

    verifyProductContent() {
        this.elements.productContent().should('be.visible');
    }

    goBackToProducts() {
        this.elements.goBackButton().click();
    }

    addToCartProduct() {
        this.elements.addToCartButton().click();
    }
}

export default new ProductPage();