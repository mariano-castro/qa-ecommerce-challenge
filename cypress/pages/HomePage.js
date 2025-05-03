class HomePage {
    elements = {
        mainContent: () => cy.get('[data-testid="home-page"]'),
        productsGrid: () => cy.get('.products-grid'),
        searchBar: () => cy.get('[data-testid="product-search"]'),
        noResultsText: () => cy.get('[data-testid="no-results"]'),
        productName: () => cy.get('.product-name')
    }

    visit() {
        cy.visit('/');
    }

    verifyMainContent() {
        this.elements.mainContent().should('be.visible');
    }

    verifyProductsGrid() {
        this.elements.productsGrid().should('be.visible');
    }

    searchProduct(product) {
        this.elements.searchBar().type(product);
    }

    validateProduct(product) {
        this.elements.productName().contains(product);
    }

    validateNotProducts() {
        this.elements.noResultsText().should('have.text', 'No products found matching your search.');
    }

}

export default new HomePage();